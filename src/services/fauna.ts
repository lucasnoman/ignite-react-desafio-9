import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY || 'problem reading .env',
  domain: 'db.fauna.com',
});
