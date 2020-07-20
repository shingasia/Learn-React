import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello React!</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

let funcStyle = 'color:blue';
let funcId= 0;
function FuncComp(props){

  // useState()는 배열을 리턴함
  var numberState=useState(props.initNumber);
  var number=numberState[0];
  var setNumber=numberState[1];

  
  // var dateState=useState((new Date()).toString());
  // var _date=dateState[0];
  // var setDate=dateState[1];

  var [_date, setDate] = useState((new Date()).toString());

  // componentDidMount & componentDidUpdate 의 역할을 한다
  // 그리고  useEffect는 여러개 가능
  useEffect(function(){
    console.log('%cfunc => useEffect 배열의 값이 바뀜'+(++funcId), funcStyle);
    document.title=number;
  }, [_date]); //배열[ ] 안에 있는 원소의 값이 바뀌었을 때만 함수가 실행된다.

  useEffect(function(){
    console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
  });

  console.log('%cfunc => render'+(++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>

      <input type="button" value="random" onClick={
        () => {setNumber(Math.random())}
      }/>

      <input type="button" value="date" onClick={
        () => {setDate((new Date()).toString())}
      }/>
    </div>
  );
}

let classStyle='color:red';
class ClassComp extends React.Component {

  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  };

  // render()가 호출되기 전
  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }

  // render()가 호출된 후
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }

  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }

  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  render(){
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>

        <input type="button" value="random" onClick={
          () => { this.setState({number: Math.random()})}
        } />

        <input type="button" value="date" onClick={
          () => { this.setState({date: (new Date()).toString()})}
        } />
      </div>
    );
  }
}

export default App;
