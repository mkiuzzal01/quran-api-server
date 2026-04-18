import { serve } from '@hono/node-server'
import app from './index'

serve({
    fetch: app.fetch,
    port: 3001
})

console.log('Server is running on port 3001')
