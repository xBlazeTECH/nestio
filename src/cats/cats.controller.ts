import { Body, Controller, MessageEvent, Get, Post, Sse } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  concat,
  defer,
  from,
  interval,
  Observable,
  OperatorFunction,
  pipe,
  Subscription,
} from 'rxjs';
import { delayWhen, map, publish } from 'rxjs/operators';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: 'List Cats' })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }
}
