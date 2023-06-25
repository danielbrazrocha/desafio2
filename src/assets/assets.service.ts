import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Asset } from '.prisma/client';

@Injectable()
export class AssetsService {
  constructor(private readonly prismaService: PrismaService) {}

  listAssets(): Promise<Asset[]> {
    return this.prismaService.asset.findMany();
  }

  createAsset(id: number, symbol: string): Promise<Asset> {
    return this.prismaService.asset.create({
      data: {
        id,
        symbol,
      },
    });
  }
}
