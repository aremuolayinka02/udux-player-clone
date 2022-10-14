import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/homepage/Homepage";
import GlobalFonts from "./utils/fonts";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Header />
        <Sidebar />
        <Homepage />
        <GlobalFonts />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
