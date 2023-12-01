import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBuyer } from './dto/buyer/createbuyer.dto';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { LoginBuyer } from './dto/buyer/loginbuyer.dto';
import { BuyerJWT } from './dto/model/buyerjwt.interface';

const prisma = new PrismaClient();

// NO AUTHENTICATION NEEDED

@Injectable()
export class AuthService {
  // BUYER SERVICES

  async buyerSignup(data: CreateBuyer) {
    const verifyEmail = await prisma.buyer.findUnique({
      where: {
        email: data.email,
      },
    });

    if (verifyEmail) {
      throw new ConflictException('Email already in use!');
    }

    const verifyCPF = await prisma.buyer.findUnique({
      where: {
        cpf: data.cpf,
      },
    });

    if (verifyCPF) {
      throw new ConflictException('CPF already in use!');
    }

    const salt = await bcrypt.genSalt(5);

    const hashedPassword = await bcrypt.hash(data.password, salt);

    return await prisma.buyer.create({
      data: { ...data, password: hashedPassword },
    });
  }

  async buyerSignin(data: LoginBuyer) {
    const verifyCPF = await prisma.buyer.findUnique({
      where: { cpf: data.cpf },
    });

    if (!verifyCPF) {
      throw new NotFoundException('CPF not found!');
    }

    const decodePassword = await bcrypt.compare(
      data.password,
      verifyCPF.password
    );
    if (!decodePassword) {
      throw new ConflictException('Incorrect password!');
    }
    const buyerJWT: BuyerJWT = { cpf: data.cpf };

    if (process.env.JWT !== undefined) {
      const token = jwt.sign(buyerJWT, process.env.JWT);

      return `Bearer ${token}`;
    }
  }
}
