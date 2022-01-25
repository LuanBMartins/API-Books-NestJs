import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(@InjectModel(Livro) private livroModel: typeof Livro) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise<void> {
    await this.livroModel.create(livro);
  }

  async alterar(livro: Livro, id: number): Promise<[number, Livro[]]> {
    console.log(livro);
    console.log(id);
    return this.livroModel.update(livro, {
      where: {
        id: id,
      },
    });
  }

  async remover(id: number): Promise<void> {
    await this.livroModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
