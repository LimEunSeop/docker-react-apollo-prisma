import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { context } from './context'
import { schema } from './schema'
import { join } from 'path'
import { restApiRouter } from './rest'

export const app = express() as any

export const server = new ApolloServer({ schema, context })
server.applyMiddleware({ app })

// Write any Express CODEs!!
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join('..', 'client', 'build')))
}

app.use(express.json())

app.use('/rest', restApiRouter)
