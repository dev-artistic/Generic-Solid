import { createRootRoute, createRouter } from '@tanstack/solid-router'
import { publicRoutes } from './publicRoutes'
import { privateRoutes } from './protectedRoutes'

export const rootRoute = createRootRoute()



const routeTree = rootRoute.addChildren([...publicRoutes, ...privateRoutes])

export const router = createRouter({ routeTree })