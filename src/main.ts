import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppDataSource } from '../ormconfig'
import { AppModule } from './app.module'

let app: INestApplication
async function bootstrap() {
    app = await NestFactory.create(AppModule)
    app.startAllMicroservices()
    app.setGlobalPrefix('backend-qqtech')
    app.enableCors({ origin: '*' })
    await AppDataSource.initialize()
    await app.listen(3000, () => '🔥 Server started at http://localhost:3000')
}
bootstrap()
