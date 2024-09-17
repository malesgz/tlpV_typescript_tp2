import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/dbConfig';

export class DbConnection {
    public sequelize: Sequelize;

    constructor() {
        const dbUri = dbConfig.getEnvDataBase().dbUri;

        this.sequelize = new Sequelize(dbUri, {
            dialect: 'postgres',
            logging: false,
        });
    }

    async connectDb(): Promise<void> {
        try {
            await this.sequelize.authenticate(); // Usar authenticate en lugar de sync para verificar la conexión
            console.log('Conexión a la base de datos establecida correctamente.');
        } catch (error) {
            console.error('No se pudo conectar a la base de datos:', error);
        }
    }
}

export const dbConnection = new DbConnection();