import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { IsCPF } from 'class-validator-cpf';
export class CreateBuyer {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsCPF()
  @IsNotEmpty()
  cpf: string;
}
