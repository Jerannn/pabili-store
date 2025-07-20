import { Link, useParams } from "react-router-dom";
import { useProduct } from "../contexts/product/useProduct";
import Spinner from "../components/Spinner";

function ProductPage() {
  const { productId } = useParams();
  const { products, isLoading } = useProduct();
  console.log(products);

  const selectedProduct = products.find((p) => String(p.id) === productId);
  console.log("LOADING...");
  if (isLoading) return <Spinner />;

  console.log("LOADING FINISHED");
  console.log(selectedProduct);
  return (
    <div>
      PRODUCTS
      <Link onClick={{}}>Go back</Link>
    </div>
  );
}

export default ProductPage;
