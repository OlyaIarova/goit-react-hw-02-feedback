import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "components/App";

const theme = {
  colors: {
    text: '#212121',
    mainBackgroundColor: ' #d4f0eb;',
    btnBackgroundColor: '#27b8ad',
    BtnTextColor: '#fcfefe',
    btnBackgroundhoverColor: '#fcfefe',
    boxShadow: '0px 0px 1px #444343',
  },
  borderRadius: '10px',
  duration: '250ms',
  timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
