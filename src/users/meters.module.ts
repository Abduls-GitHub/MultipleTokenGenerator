import { Module } from '@nestjs/common';
import { MetersController } from './controllers/meters.controller';
import { meterService } from './services/meters.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Meter} from "../typeorm/entity/Meter";

@Module({
  imports:[TypeOrmModule.forFeature([Meter])],
  controllers: [MetersController],
  providers: [meterService]
})
export class MetersModule {}
