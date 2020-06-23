import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Leave from "./routes/Leave";
import Join from "./routes/Join";
import Modify from "./routes/Modify";

function App() {
  return (
    <div className="App">
      {/* <Router basename="/root">
        <Route path="/" exact={true} component={Base} />
        <Route path={["/home", "/main"]} component={Home} />
        <Route path="/email" component={Email} />
      </Router> */}

      {/* '/' 뿐만 아니라 '/root' 도 매칭되게 한다 
      Switch를 같이 쓰면 가장 처음 매칭되는 <Route /> 엘리먼트만 렌더링 하고 나머지 자식 <Route />는 무시한다 */}

      <Router basename="/root">
        <Switch>
          <Route exact path={["/", "/home", "/main"]}>
            {/* localhost:3000/, localhost:3000/home, localhost:3000/main, localhost:3000/root/home 과 매칭된다 */}
            <Home />
          </Route>
          <Route path="/member/login">
            <Login id="hello" />
          </Route>
          <Route path="/member/leave">
            <Leave />
          </Route>
          <Route path="/member/join">
            <Join />
          </Route>
          <Route path="/member/modify">
            <Modify />
          </Route>
          <Route path="/exceptions">
            <div>에러페이지</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
