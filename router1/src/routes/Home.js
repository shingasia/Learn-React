import React from "react";

function Home(props) {
  console.log(props); // history, location, match
  return <div>Home page</div>;
}

export default Home;

{
  /* 
    라우트 컴포넌트 프로퍼티
    
    history:
        action: "POP"
        block: ƒ block(prompt)
        createHref: ƒ createHref(location)
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        length: 15
        listen: ƒ listen(listener)
        location: {pathname: "/main", search: "?user=hello", hash: "", state: undefined}
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
        __proto__: Object
    location:
        hash: ""
        pathname: "/main"
        search: "?user=hello"
        state: undefined
        __proto__: Object
    match:
        isExact: true
        params: {}
        path: "/main"
        url: "/main"
*/
}
