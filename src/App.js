import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/homepage/Homepage";
import GlobalFonts from "./utils/fonts";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import Footer from "./components/footer/Footer";

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Header />
        <Sidebar />
        <Homepage />
        <Footer />
        <GlobalFonts />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
