# Learn-React
axios, react-router-dom 예제

<Route>
▶ Route는 component, render, children 속성을 가진다.
  <Route path="/user/:username" component={User} />
  <Route path="/home" render={() => <div>Home</div>} />
  <Route
    children={({ match, ...rest }) => (
      {/* Animate will always render, so you can use lifecycles
          to animate its child in and out */}
      <Animate>
        {match && <Something {...rest}/>}
      </Animate>
    )}
  />
▶ 각각의 Route와 연결된 컴포넌트에 props로 match, location, history라는 객체를 전달하게 된다.
  <match>
  -path : [string] 라우터에 정의된 path
  -url : [string] 실제 클라이언트로부터 요청된 url path
  -isExact : [boolean] true일 경우 전체 경로가 완전히 매칭될 경우에만 요청을 수행
  -params : [JSON object] url path로 전달된 파라미터 객체
    
  <location>
  -pathname : [string] 현재 페이지의 경로명
  -search : [string] 현재 페이지의 query string
  -hash : [string] 현재 페이지의 hash
  
  <history>
  -length : [number] 전체 history 스택의 길이
  -action : [string] 최근에 수행된 action (PUSH, REPLACE or POP)
  -location : [JSON object] 최근 경로 정보
  -push(path, [state]) : [function] 새로운 경로를 history 스택으로 푸시하여 페이지를 이동
  -replace(path, [state]) : [function] 최근 경로를 history 스택에서 교체하여 페이지를 이동
  -go(n) : [function] : history 스택의 포인터를 n번째로 이동
  -goBack() : [function] 이전 페이지로 이동
  -goForward() : [function] 앞 페이지로 이동
  -block(prompt) : [function] history 스택의 PUSH/POP 동작을 제어


<Link>
▶ Link의 to 속성에는 string, object, function 이 올 수 있다.
  
  <Link to="/about">About</Link>
  <Link to="/courses?sort=name" />
  
  <Link
    to={{
      pathname: "/courses",
      search: "?sort=name",
      hash: "#the-hash",
      state: { fromDashboard: true }
    }}
  />

  <Link to={location => ({ ...location, pathname: "/courses" })} />
  <Link to={location => `${location.pathname}?sort=name`} />
  to 속성에 함수가 올 경우에는 -> 현재 위치가 인수로 전달되고 위치 표현을 문자열 또는 객체로 반환해야하는 함수만 가능
    














