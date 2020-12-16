import { CatsService } from './cats.service';
import { CatSchema, Cat } from './cats.schema';
import { Module } from '@nestjs/common';
import {CatsResolver} from './cats.resolver'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
