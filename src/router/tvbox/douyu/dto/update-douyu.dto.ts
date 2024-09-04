import { PartialType } from '@nestjs/mapped-types';
import { CreateDouyuDto } from './create-douyu.dto';

export class UpdateDouyuDto extends PartialType(CreateDouyuDto) {}
