import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function NotFound() {
  const { error, setError } = useAuth();
  return (
    error && (
      <div>
        <h1>Oops! You seem to be lost.</h1>
        <p>Here are some helpful links:</p>
        <Link to="/">Home</Link>
      </div>
    )
  );
}
