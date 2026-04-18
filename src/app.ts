import { Hono } from 'hono'
import { cors } from 'hono/cors'
import surah from './routes/surah'
import search from './routes/search'

const app = new Hono()

// Middleware
app.use('*', cors())



//main routes

app.route('/surah', surah)
app.route('/search', search)


// Health check
app.get('/', (c) => {
  return c.json({
    status: 'Ok',
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
