import request from 'supertest';
import app from '../src/app.js';

describe("testing the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});