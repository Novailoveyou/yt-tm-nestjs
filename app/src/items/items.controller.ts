import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { Request, Response } from 'express'

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response<string> {
    console.log(req.url)
    return res.send('Hello World')
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
  }
}
