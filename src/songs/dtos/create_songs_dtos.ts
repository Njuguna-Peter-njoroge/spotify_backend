import {
  IsArray,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsMilitaryTime,
} from 'class-validator';

export class CreateSongsDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsString({ each: true }) // ✅ EACH item in the array must be a string
  @IsNotEmpty({ each: true })
 readonly  artists: string[];

 
  @IsDateString()
  @IsNotEmpty()
  readonly releasedDate: string;

  @IsMilitaryTime()
  @IsNotEmpty()
 readonly  duration: string;
}
