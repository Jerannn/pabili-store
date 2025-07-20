import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      This Page doesn't Exist!
      <Link onClick={handleBack}>Go back</Link>
    </div>
  );
}

export default PageNotFound;
