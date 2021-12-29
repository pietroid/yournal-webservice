"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg = require("pg");
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    console.log('Defined env');
    dotenv.config();
}
exports.pool = new pg.Pool({
    host: process.env.AWS_DB_HOSTNAME,
    port: 5432,
    user: process.env.AWS_DB_USERNAME,
    database: process.env.AWS_DB_DATABASE,
    password: process.env.AWS_DB_PASSWORD,
});
//# sourceMappingURL=db.js.map