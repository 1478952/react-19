import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Link to="test-use">use</Link>
      </div>
      <div>
        <Link to="test-ref">ref</Link>
      </div>
      <div>
        <Link to="test-transition">transition</Link>
      </div>
    </>
  );
}

export default Home;
