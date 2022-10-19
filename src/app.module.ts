import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrmModuleOptions } from "../ormconfig";
import { AppController } from "./app.controller";

@Module({
    imports: [TypeOrmModule.forRoot({ ...OrmModuleOptions })],
    controllers: [AppController],
})
export class AppModule {}
