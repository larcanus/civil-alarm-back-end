import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost', // 45.128.206.159 or civil.host for develop
    port: 5432,
    username: 'admin',
    password: '*',
    database: 'civilalarm',
    schema: 'production',
    synchronize: false,
    logging: false,
    entities: [
        __dirname + '/**/*.entity{.ts,.js}'
    ],
    migrations: [
        __dirname + '/migrations/**/*{.ts,.js}'
    ],
    cli: {
        migrationsDir: 'src/migrations'
    },
    subscribers: [
        'src/subscriber/**/*.ts'
    ]
};
export default config;