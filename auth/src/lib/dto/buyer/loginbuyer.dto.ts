import { IsString, IsNotEmpty } from 'class-validator';
import { IsCPF } from 'class-validator-cpf';

export class LoginBuyer {
  @IsCPF()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
