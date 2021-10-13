import React from 'react';


function Food({yaho}){
  
  return(
    <h2>나는 {yaho}</h2>
  )
}



function App() {
  return (
    <div className="App">
      <h1>나는 형우다.</h1>
      <Food yaho="apple" />
      <Food yaho="라면" />
      <Food yaho="고기" />
      <Food yaho="밥" />
    </div>
  );
}

export default App;
