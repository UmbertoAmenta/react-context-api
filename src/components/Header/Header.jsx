// components
import HeadNavBar from "../HeadNavBar";

// contexts
import { useSearchContext } from "../contexts/SearchContext";

export default function Header() {
  const { test } = useSearchContext();

  return (
    <header>
      <div className="container">
        <div>
          <h1>
            {test}
            <em>Le ricette di Nonna</em>
          </h1>
        </div>
        <HeadNavBar />
      </div>
    </header>
  );
}
