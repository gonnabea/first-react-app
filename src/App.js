import React from 'react';

function Food({name, rank, image, key}) {
  console.log(name);
  return <h1>I like {name}, rank: {rank} 
  image: <img src={image}></img>
  no need to reference( ID: {key})
  </h1>
}

function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image}/>
}

const foodILike = [{id:1, name : "삼겹살", rank:"1", image: "https://img.insight.co.kr/static/2017/03/02/700/2CT7QUNSD997P5VVQU23.jpg"},
{id:2, name : "라면", rank:"2", image:"https://t1.daumcdn.net/cfile/tistory/9997F8425A3B49B32C"},
{id:3, name : "부대찌개", rank:"3", image:"https://static.myletter.net/20160923/a35f8e69-6874-4cc3-9b55-7a9994390a93.jpg"},
{id:4, name : "감자탕", rank:"4", image:"http://www.businesskorea.co.kr/news/photo/201905/31575_43222_232.jpg"}]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rank={dish.rank} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
