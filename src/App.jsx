import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeProvider } from "./features/context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
