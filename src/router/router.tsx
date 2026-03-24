import { createRootRoute, createRoute, createRouter } from '@tanstack/solid-router'
import Hero from '../pages/hero/hero'
import Business from '../pages/business/business'

const rootRoute = createRootRoute()

const heroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Hero
})

const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/business',
  component:Business
})

const routeTree = rootRoute.addChildren([heroRoute, businessRoute])

export const router = createRouter({ routeTree })