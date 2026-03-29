import "./router.css";

import { createRootRoute, createRouter, Link, Outlet, useNavigate } from '@tanstack/solid-router'
import { publicRoutes } from './publicRoutes'
import { privateRoutes } from './protectedRoutes'
import type { JSXElement } from 'solid-js'
import { NavigationComponent } from "../components/navbar/navbar";
import { createSignal } from 'solid-js'


const [user, setUser] = createSignal(null)
export const rootRoute = createRootRoute({
    component: () => (
        <>
            <NavigationComponent />
            <Outlet/>
        </>
    ),
    context: {
        user
    }
})
const routeTree = rootRoute.addChildren([...publicRoutes, ...privateRoutes])
export const router = createRouter({ routeTree })


const navigate = useNavigate()
export const RouterNavigation = ({href = "/"}:{href?: string}) => {
    navigate({to:href})
}


export const RouterLink = ({ href = "/", children }: { href?: string, children: JSXElement }) => {
    return (
        <Link to={href} class="navbar__desktop-link">
            {children}
        </Link>
    )
}