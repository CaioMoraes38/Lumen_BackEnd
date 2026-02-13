import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { randomUUID } from 'node:crypto';
import { extname } from 'node:path';

@Injectable()
export class StorageService {
  private supabase: SupabaseClient;

  constructor(private readonly configService: ConfigService) {
    // 1. Busca as variáveis de ambiente de forma segura
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    // 2. Trava a aplicação se não tiver as chaves (evita erros silenciosos)
    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'ERRO CRÍTICO: As variáveis SUPABASE_URL e SUPABASE_KEY não foram encontradas no .env',
      );
    }

    // 3. Inicializa o cliente do Supabase
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async uploadFile(file: Express.Multer.File, folderName: string) {
    // Validação básica
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado.');
    }

    // 4. Gera um nome único para o arquivo (ex: avatars/123-456.png)
    const fileExt = extname(file.originalname);
    const fileName = `${randomUUID()}${fileExt}`;
    const filePath = `${folderName}/${fileName}`;

    // 5. Envia para o Supabase (Bucket 'Image')
    const { data, error } = await this.supabase.storage
      .from('Image') // <--- IMPORTANTE: O nome do Bucket no Supabase deve ser EXATO
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) {
      console.error('Erro Supabase:', error);
      throw new InternalServerErrorException('Falha ao fazer upload da imagem.');
    }

    // 6. Gera a URL pública para salvar no banco
    const { data: publicUrlData } = this.supabase.storage
      .from('Image')
      .getPublicUrl(filePath);

    return {
      url: publicUrlData.publicUrl,
      path: filePath,
    };
  }
}