import { RouterProvider } from "@tanstack/solid-router"
import { router } from "./router/router"
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query"

const queryClient = new QueryClient()

function App() {
  return(
  <>
  <QueryClientProvider client={queryClient}>
    {/* <SolidQueryDevtools initialIsOpen={false}/> */}
    <RouterProvider router={router} />
  </QueryClientProvider>
  </>
  )
}

export default App
