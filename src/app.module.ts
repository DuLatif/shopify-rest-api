import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // jangan pakai localhost, gunakan nama container di docker kalau sama2 di docker
    MongooseModule.forRoot('mongodb://shopify:secret@mongodb:27017/admin'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
