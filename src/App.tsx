import { RouterProvider } from "@tanstack/solid-router"
import { router } from "./router/router"
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query"

const queryClient = new QueryClient()

function App() {
  return 
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App
