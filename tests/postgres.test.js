const { expect, test } = require('@jest/globals');
const { Client } = require('pg');

test('connects to the PostgreSQL service', async () => {
  const client = new Client({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT) || 5432,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  });

  await client.connect();

  try {
    const result = await client.query('SELECT 1 AS connected');
    expect(result.rows[0].connected).toBe(1);
  } finally {
    await client.end();
  }
});

