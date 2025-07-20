import ProductSection from "../products/ProductSection";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.mainContent}>
      <Sidebar />
      <ProductSection />
    </main>
  );
}

export default Home;
