import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import ScrollToTop from "./components/scrollToTop";
import TemplatePage from "./pages/template";
import NotFoundPage from "./pages/404";
import LoadingPage from "./pages/loading";

// Bootstrap CSS:
import "./scss/scss_global/customBootstrap.global.scss";
// Bootstrap icons:
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Global styles
import "./scss/scss_global/main.global.scss";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

const BaseLayout = () => (
  <React.Suspense fallback={<LoadingPage />}>
    <Routes>
      <Route path="/" exact element={<TemplatePage />} />
      <Route path="/:templateName" element={<TemplatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </React.Suspense>
);

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <BaseLayout />
    </QueryClientProvider>
  </BrowserRouter>
);

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
