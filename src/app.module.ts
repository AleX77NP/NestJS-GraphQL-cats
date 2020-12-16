import { CatsModule } from './cats/cats.module';
import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb+srv://alexandar12:lozinka@cluster0.68jgw.gcp.mongodb.net/test?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
