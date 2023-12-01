import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class BuyerService {
  async getAllBuyers() {
    return await prisma.buyer.findMany();
  }
}
