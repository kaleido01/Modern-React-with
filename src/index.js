//import the react and ReactDom libralies

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommnentDetail';
// create a react component

const App=()=>{

  return (
   
  <div className="ui container comments">
    <CommentDetail author="sam" created_at="am7:00"/>
    <CommentDetail author="tom" created_at="am5:00"/>
    <CommentDetail author="pop" created_at="am3:00"/>
  </div>
  )
}

//Take the react component and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)