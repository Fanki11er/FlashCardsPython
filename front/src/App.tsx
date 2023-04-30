import { ThemeProvider } from "styled-components";

import GlobalStyle from "./Theme/GlobalStyles";
import { theme } from "./Theme/theme";

import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
