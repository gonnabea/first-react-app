import React from 'react';

function Food({fav}) {
  console.log(fav);
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      Oh my god! 
      <Food 
      fav="kimchi"
      />
      <Food
      fav="ramen"
      />
      <Food
      fav="samgiopsal"
      />
      <Food fav="chukumi"
      />
    </div>
  );
}

export default App;
