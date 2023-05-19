import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  // ['url local', 'url prod']
  origin: true,
})
app.register(memoriesRoutes)

app.listen({
  port: 3333,
})
