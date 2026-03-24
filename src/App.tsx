import { RouterProvider } from "@tanstack/solid-router"
import { router } from "./router/router"

function App() {

  return <RouterProvider router={router} />
}

export default App
