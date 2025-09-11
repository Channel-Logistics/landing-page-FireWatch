// src/main.jsx (o el archivo que mostraste)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentRenderer from "./components/Content/ContentRenderer.jsx";
import DocsLayout from "./components/Layout/DocsLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />} />

        
        <Route element={<DocsLayout />}>
          <Route path="/docs" element={<ContentRenderer />} />
          <Route path="/what-is-firewatch" element={<ContentRenderer />} />
          <Route path="/high-priority" element={<ContentRenderer />} />
          <Route path="/all-fires" element={<ContentRenderer />} />
          <Route path="/terrain-3D" element={<ContentRenderer />} />
          <Route path="/globalCoverage" element={<ContentRenderer />} />
          <Route path="/predictions" element={<ContentRenderer />} />
          <Route path="/teams" element={<ContentRenderer />} />
          <Route path="/alerts" element={<ContentRenderer />} />
          <Route path="/forecast" element={<ContentRenderer />} />
          <Route path="/raws" element={<ContentRenderer />} />
          
        </Route>

        {/* 404 global (opcional y recomendado) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
