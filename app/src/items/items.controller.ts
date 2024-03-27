import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id)
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateItemDto) {
    return this.itemsService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.itemsService.delete(id)
  }
}
