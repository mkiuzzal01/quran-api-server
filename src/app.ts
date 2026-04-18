import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Middleware
app.use('*', cors())



//main routes







// Health check
app.get('/', (c) => {
  return c.json({
    status: 'ok',
    message: 'Quran API is running'
  })
})

// 404 handler
app.notFound((c) => {
  return c.json({ message: 'Not Found' }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error(err)
  return c.json({ message: 'Internal Server Error' }, 500)
})

export default app
