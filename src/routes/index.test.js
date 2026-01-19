const request = require('supertest');
const express = require('express');
const routes = require('./index');

// Create a test app
const app = express();
app.use(express.json());
app.use('/api', routes);

describe('API Routes', () => {
  describe('GET /api', () => {
    it('should return welcome message with version', async () => {
      const response = await request(app).get('/api');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Welcome to the API');
      expect(response.body).toHaveProperty('version', '1.0.0');
    });
  });

  describe('GET /api/users', () => {
    it('should return an array of users', async () => {
      const response = await request(app).get('/api/users');
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
    });

    it('should return users with correct structure', async () => {
      const response = await request(app).get('/api/users');
      
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0].id).toBe(1);
      expect(response.body[0].name).toBe('John Doe');
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return a user by id', async () => {
      const response = await request(app).get('/api/users/1');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('name', 'John Doe');
    });

    it('should parse the id parameter as an integer', async () => {
      const response = await request(app).get('/api/users/42');
      
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(42);
      expect(typeof response.body.id).toBe('number');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user with provided name', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ name: 'Test User' })
        .set('Content-Type', 'application/json');
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id', 3);
      expect(response.body).toHaveProperty('name', 'Test User');
    });

    it('should create a new user with default name when name is not provided', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({})
        .set('Content-Type', 'application/json');
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id', 3);
      expect(response.body).toHaveProperty('name', 'New User');
    });
  });
});
