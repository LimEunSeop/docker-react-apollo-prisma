import express from 'express'
import { testRouter } from './test'

export const restApiRouter = express.Router()

restApiRouter.use('/test', testRouter)
