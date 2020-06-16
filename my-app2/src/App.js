import React from "react";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

// react-router-dom 에는 여러 종류의 라우터가 있다.
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />{" "}
      {/* exact 속성은 url이 정확하게 일치해야 렌더링 한다 */}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      {/* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction"> 
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
    </BrowserRouter>
  );
}

export default App;
