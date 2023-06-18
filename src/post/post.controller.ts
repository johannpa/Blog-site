import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly prisma: Prisma) {}

  @Get()
  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }

  @Post()
  async create(@Body() data: Prisma.PostCreateInput): Promise<Post> {
    return await this.prisma.post.create({ data });
  }

  @Put(':id')
  async update(@Param('id', ParseInt) id: number, @Body() data: Prisma.PostUpdateInput): Promise<Post> {
    return await this.prisma.post.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseInt) id: number): Promise<Post> {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
