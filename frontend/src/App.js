import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import { ScrollToTop } from './components';

import './App.css'

const NoPage  = React.lazy(() => import('./pages/NoPage'));
const Home  = React.lazy(() => import('./pages/Home'));


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}