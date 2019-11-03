//import "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css";
//import "https://d33wubrfki0l68.cloudfront.net/css/ba81d45f1eb54096e2d1717c5edcbf3af9a19812/static/css/main.269f401f.css";

import React from "react";


// function Navbar() {
//     return (
//       <nav className="navbar">
//         <ul>
//             <li className="brand">Clicky Game</li>
//             <li>Click an image to begin!</li>
//             <li>Score: 0 | Top Score: 0</li>
//         </ul>
//       </nav>
//     );
//   }


  // function Navbar() {
  //   return (
  //     <nav className="navbar">
  //       <ul>
  //           <li className="brand">Clicky Game</li>
  //           <li>Click an image to begin!</li>
  //           <li>Score: 0 | Top Score: 0</li>
  //       </ul>
  //     </nav>
  //   );
  // }



// import newscoreandyourscore here
  function Navbar(props) {
    return (
      <nav className="navbar navbar-light bg-light">
      <h1 className="navbar-brand mb-0 h1">Clicky Game</h1>


      
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="navbar-text">Click an image to begin!         <span className="sr-only">(current)</span></a>
            <a className="navbar-text">   Score: 0 <span className="sr-only">(current)</span></a>
            <a className="navbar-text">| Top Score: 0         <span className="sr-only">(current)</span></a>
          </li>         
        </ul>

      </nav>
    )
  }

  export default Navbar;