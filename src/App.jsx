import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import { DarkModeProvider } from "./context/UseDarkModeContext";
const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <RouterProvider router={router}>
        <Navigate to="/" />
      </RouterProvider>
    </DarkModeProvider>
  );
}

export default App;
