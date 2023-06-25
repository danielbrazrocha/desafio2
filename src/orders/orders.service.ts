import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order, OrderStatus } from '.prisma/client';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  createOrder(data: CreateOrderDto): Promise<Order> {
    const { asset_id, price } = data;
    return this.prismaService.order.create({
      data: {
        asset_id,
        price,
        status: OrderStatus.OPEN,
      },
    });
  }

  listOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }
}
