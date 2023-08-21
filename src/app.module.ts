import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Meter} from "./typeorm/entity/Meter";
import { MetersModule } from './users/meters.module';

@Module({
    imports: [ TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 's3_msi',
        entities: [Meter],
        synchronize: false,
        retryAttempts: 1
    }), MetersModule
    ],
})
export class AppModule {
}
