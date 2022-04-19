import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompagnyModule } from './compagny/compagny.module';

@Module({
  imports: [CompagnyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
