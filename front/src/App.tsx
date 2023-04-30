import { ThemeProvider } from "styled-components";

import GlobalStyle from "./Theme/GlobalStyles";
import { theme } from "./Theme/theme";

import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import UserProvider from "./Providers/UserProvider";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
