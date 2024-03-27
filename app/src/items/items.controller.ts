import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { ItemsService } from './items.service'
import { Item } from '@prisma/client'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: Item['id']) {
    return this.itemsService.findOne(id)
  }

  @Post()
  create(@Body() item: Item) {
    return this.itemsService.create(item)
  }

  @Put(':id')
  update(@Param('id') id: Item['id'], @Body() item: Item) {
    return this.itemsService.update(id, item)
  }

  @Delete(':id')
  delete(@Param('id') id: Item['id']) {
    return this.itemsService.delete(id)
  }
}
