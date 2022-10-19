import { Controller, Post, Res, UseInterceptors } from '@nestjs/common'
import { AppDataSource } from '../ormconfig'
import { AppModule } from './app.module'

@Controller()
export class AppController {
    @Post('/hello')
    public async clearCache() {
        console.log('HELLO')
        console.log(await AppDataSource.createQueryRunner().query('select * from app_parameter'))
    }
}
