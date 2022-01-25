import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';

import { Livro } from './livro.model';
import { LivrosService } from './livro-service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Array<Livro>> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<void> {
    await this.livrosService.criar(livro);
  }

  @Put(':id')
  async alterar(
    @Body() livro: Livro,
    @Param() params,
  ): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livro, params.id);
  }

  @Delete(':id')
  async remover(@Param() params): Promise<void> {
    await this.livrosService.remover(params.id);
  }
}
