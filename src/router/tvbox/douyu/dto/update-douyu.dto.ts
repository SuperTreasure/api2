import { PartialType } from '@nestjs/mapped-types';
import { DirectoryMixListDouyuDto } from './directoryMixList-douyu.dto';

export class UpdateDouyuDto extends PartialType(DirectoryMixListDouyuDto) {}
