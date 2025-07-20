import { Routes, Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import ProductSection from "../products/ProductSection";
import Sidebar from "../sidebar/Sidebar";

import styles from "./AppLayout.module.css";
import Home from "../Home/Home";
import PageNotFound from "../Error/PageNotFound";
import ProductPage from "../../pages/ProductPage";

function AppLayout() {
  return (
    <section className={styles.appLayoutContainer}>
      <Navbar />

      {/* <main className={styles.mainContent}>
        <Sidebar />
        <ProductSection />
      </main> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default AppLayout;
