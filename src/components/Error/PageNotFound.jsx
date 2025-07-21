import { Link } from "react-router-dom";
import { useNavigateBack } from "../hooks/useNavigateBack";

function PageNotFound() {
  const navigateBack = useNavigateBack();

  return (
    <div>
      This Page doesn't Exist!
      <Link onClick={navigateBack}>Go back</Link>
    </div>
  );
}

export default PageNotFound;
