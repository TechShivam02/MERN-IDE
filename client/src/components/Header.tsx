import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
       
        <Link to="/">
          <h2 className=" font-bold select-none">WD Compiler</h2>{" "}
          {/* when u click WD Comp..  it will redirect to /  home page */}
        </Link>

        <ul className=" flex gap-2 select-none">
          <li>
            <Link to="/compiler">
              <Button variant="secondary"> Compiler </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
