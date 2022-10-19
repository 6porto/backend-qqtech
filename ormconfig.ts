import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'

const entities = ['dist/src/modules/**/infra/models/*.{ts,js}', 'dist/src/shared/infra/models/*.{ts,js}']

const DataSourceConfig = {
    name: 'default',
    username: 'qq_carga_preco', // adicione aqui o usuário do banco
    password: 'C4rg4Pr3c0', // adicione aqui a senha do banco
    host: '172.22.1.13', // adicione aqui o ip do banco
    port: 5432, // adicione aqui a porta do banco
    database: 'qq-preco-produto', // adicione aqui o nome do banco
    dropSchema: false,
    cache: false,
    synchronize: false,
    logging: true,
    logger: 'advanced-console',
    extra: {
        connectionLimit: 10,
    },
    migrations: ['dist/src/shared/infra/migrations/**/*.{ts,js}'],
    entities,
}

export const OrmModuleOptions: TypeOrmModuleOptions = {
    ...DataSourceConfig,
    type: 'postgres',
    logger: 'advanced-console',
}

export const AppDataSource = new DataSource({
    ...DataSourceConfig,
    type: 'postgres',
    logger: 'advanced-console',
})
