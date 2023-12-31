import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({
      data: createProductDto,
    });
  }

  async findAll(category?: string) {
    if (category)
      return this.databaseService.product.findMany({
        where: {
          category,
        },
      });
    return this.databaseService.product.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.databaseService.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where: {
        id,
      },
    });
  }
}
