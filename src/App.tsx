import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { BookPage } from "./pages/BookPage";
import { ServicesPage } from "./pages/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/sluzby" element={<ServicesPage />} />
        <Route path="/sjednat" element={<BookPage />} />
      </Route>
    </Routes>
  );
}