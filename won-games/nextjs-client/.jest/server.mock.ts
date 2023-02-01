import { server } from '../src/utils/mockServer/server'
global.fetch = require('node-fetch')

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
