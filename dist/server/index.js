import {onRequest} from 'firebase-functions/v2/https'
import ServerApp1Express from './ServerApp1Express.js'

export const serverapp1 = onRequest(ServerApp1Express)