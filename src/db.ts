import * as pg from 'pg';
import * as dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    console.log('Defined env')
    dotenv.config();
}
export const pool = new pg.Pool({
    host: process.env.AWS_DB_HOSTNAME,
    port: 5432,
    user: process.env.AWS_DB_USERNAME,
    database: process.env.AWS_DB_DATABASE,
    password: process.env.AWS_DB_PASSWORD,
})