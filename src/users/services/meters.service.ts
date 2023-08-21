import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Meter} from "../../typeorm/entity/Meter";
import {Repository} from "typeorm";

@Injectable()
export class meterService {

    private logger: Logger = new Logger('meterService');

    constructor(@InjectRepository(Meter) private meterRepository: Repository<Meter>) {
    }

    public async fetchMeters() {
        try {
            this.logger.log('Getting Meters')
            return await this.meterRepository.find();
        } catch (e) {
            throw new HttpException({reason: `Error occurred in Meter Service fetchMeters() : `}, HttpStatus.NOT_FOUND);
        }
    }

    public async fetchOneMeter(id: number) {
        try {
            this.logger.log(`Getting Meters with id: ${id}`);
            return await this.meterRepository.findOneBy({id})
        } catch (e) {
            throw new HttpException({reason: `Error occurred in Meter Service fetchOneMeter() : `}, HttpStatus.NOT_FOUND);
        }
    }
}
