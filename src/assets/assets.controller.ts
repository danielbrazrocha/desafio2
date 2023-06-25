import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  listAssets() {
    return this.assetsService.listAssets();
  }

  @Get()
  createAsset(@Body('id') id: number, @Body('symbol') symbol: string) {
    return this.assetsService.createAsset(id, symbol);
  }
}
