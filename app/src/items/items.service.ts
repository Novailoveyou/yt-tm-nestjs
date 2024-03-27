import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Item } from '@prisma/client'

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany()
  }

  findOne(id: string) {
    return this.prisma.item.findUnique({
      where: { id: id },
    })
  }

  create(data: Omit<Item, 'createdAt' | 'updatedAt' | 'id'>) {
    return this.prisma.item.create({
      data,
    })
  }

  update(id: string, data: Omit<Item, 'createdAt' | 'updatedAt' | 'id'>) {
    return this.prisma.item.update({
      where: { id },
      data,
    })
  }

  delete(id: string) {
    return this.prisma.item.delete({
      where: { id },
    })
  }
}
