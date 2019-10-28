import "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css";
import "https://d33wubrfki0l68.cloudfront.net/css/ba81d45f1eb54096e2d1717c5edcbf3af9a19812/static/css/main.269f401f.css";


function Navbar() {
    return (
      <nav className="navbar">
        <ul>
            <li className="brand">Clicky Game</li>
            <li>Click an image to begin!</li>
            <li>Score: 0 | Top Score: 0</li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;