import { AppController } from './app.controller';
import { MathService } from './math.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
