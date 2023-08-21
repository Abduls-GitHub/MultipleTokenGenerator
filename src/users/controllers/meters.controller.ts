import {Controller, Get, HttpException, HttpStatus, Logger, Param} from '@nestjs/common';
import {meterService} from "../services/meters.service";

@Controller('meters')
export class MetersController {

    private logger: Logger = new Logger('MetersController')
    constructor(private meterService: meterService) {
    }

    @Get()
    public async getMeters() {
        try {
            this.logger.log('In Controller getMeters()')
            return await this.meterService.fetchMeters();
        } catch (e) {
            throw new HttpException({reason: `Error occurred in Meters Controller @Get() : ${e}`}, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    public async getOneMeter(@Param('id') id: number) {
        try {
            this.logger.log('In Controller getOneMeter(:id)')
            return await this.meterService.fetchOneMeter(id)
        } catch (e) {
            throw new HttpException({reason: `Error occurred in Meters Controller @Get() : ${e}`}, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
