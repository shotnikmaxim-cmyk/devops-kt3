const { describe, expect, test } = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app');

describe('HTTP routes', () => {
  test('GET / returns the application name', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('KT3 App');
  });

  test('GET /health returns an ok status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});

