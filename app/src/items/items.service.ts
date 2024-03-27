import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { Item } from '@prisma/client'

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany()
  }

  findOne(id: Item['id']) {
    return this.prisma.item.findUnique({
      where: { id: id },
    })
  }

  create(data: Item) {
    return this.prisma.item.create({
      data,
    })
  }

  update(id: Item['id'], data: Item) {
    return this.prisma.item.update({
      where: { id },
      data,
    })
  }

  delete(id: Item['id']) {
    return this.prisma.item.delete({
      where: { id },
    })
  }
}
