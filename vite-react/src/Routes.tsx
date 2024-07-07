import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonContainer from "./features/pokemon/PokemonContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PokemonContainer />,
    children: [
      //   { path: "/pokemon", element: <PokemonContainer /> },
      //   { path: "/user-details", element: <MultiStepFormContainer /> },
      //   { path: "/posts", element: <Posts /> },
    ],
  },
]);

const Routes = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
);
export default Routes;
