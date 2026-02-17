import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { randomUUID } from 'node:crypto';
import { extname } from 'node:path';

@Injectable()
export class StorageService {
  private supabase: SupabaseClient;

  constructor(private readonly configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'ERRO CRÍTICO: As variáveis SUPABASE_URL e SUPABASE_KEY não foram encontradas no .env',
      );
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async uploadFile(file: Express.Multer.File, folderName: string) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado.');
    }

    const fileExt = extname(file.originalname);
    const fileName = `${randomUUID()}${fileExt}`;
    const filePath = `${folderName}/${fileName}`;

    const { data, error } = await this.supabase.storage
      .from('Image') 
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) {
      console.error('Erro Supabase:', error);
      throw new InternalServerErrorException('Falha ao fazer upload da imagem.');
    }

    const { data: publicUrlData } = this.supabase.storage
      .from('Image')
      .getPublicUrl(filePath);

    return {
      url: publicUrlData.publicUrl,
      path: filePath,
    };
  }
}