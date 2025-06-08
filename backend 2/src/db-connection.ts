import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'BINGO'
});

export function query(text: any): any {
    return pool.query(text);
};