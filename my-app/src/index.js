import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const { useEffect, useState } = React;
const jjk =[
  {
      name: 'yuji',
      age: 15,
      power: 'shrine',
      nickname: 'Strongest of tomorrows',
      grade: '1'
  },
  {
      name: 'megumi',
      age: 15,
      power: '10 shadows',
      nickname: 'Potential man',
      grade: 'semi-1'
  },
  {
      name: 'nobara',
      age: 16,
      power: 'hammer',
      nickname: 'Blood Queen',
      grade: '3'
  },
  {
      name: 'gojo',
      age: 28,
      power: 'infinity',
      nickname: 'Strongest Jujutsu Sorcerer',
      grade: 'special grade'
  },
  {
      name: 'maki',
      age: 16,
      power: 'heavenly restriction',
      nickname: 'next toji',
      grade: '1'
  },
  {
      name: 'panda',
      age: 'unknown',
      power: 'unknown',
      nickname: 'Cursed corpse',
      grade: '2'
  },
  {
      name: 'sukuna',
      age: '1000s',
      power: 'shrine',
      nickname: 'King of Curses',
      grade: 'special grade'
  },
  {
      name: 'mahoraga',
      age: 'unknown',
      power: 'rct',
      nickname: 'shikigami',
      grade: 'special grade'
  },
  {
      name: 'toji',
      age: 31,
      power: 'heavenly restriction',
      nickname: 'Sorcerer Killer',
      grade: 'special grade'
  },
  {
      name: 'nanami',
      age: 27,
      power: 'ratio technique',
      nickname: 'Duty-bound Sorcerer',
      grade: '1'
  },
  {
      name: 'yuta',
      age: 17,
      power: 'Copy',
      nickname: 'TheCursed Child',
      grade: 'special grade'
  },
  {
      name: 'kashimo',
      age: '400s',
      power: 'Mythical East Amber',
      nickname: 'Strongest of the Edo peroid',
      grade: 'special grade'
  },
  {
      name: 'kirira',
      age: '19',
      power: 'stars',
      nickname: 'hikari girlfriend',
      grade: '2'
  },
  {
      name: 'mechamaru',
      age: '18',
      power: 'doll',
      nickname: 'mechamaru',
      grade: 'semi-2'
  },
  {
      name: 'miwa',
      age: '17',
      power: 'new shadow style',
      nickname: "mechamaru's girl",
      grade: '4'
  },
  

];

function App() {
  const [select, setSelect] = useState('none');
  return (
    <div id="roots">
      <h1>JJK</h1>
      <Select  setSelect={setSelect}/>
      <RenderChars select={select}/>
    </div>
    
  );
}
function Select({setSelect}) {
 
  return (
    <select id="select" onChange={(e) => setSelect(e.target.value)}>
      <option id="none">none</option>
      <option id="grade">By Grade</option>
      <option id="special">Only Special</option>
    </select>
  );
}
function RenderChars({select}) {
  const gradeOrder =  ['special grade', '1', 'semi-1', '2', 'semi-2', '3', '4'];
  const sorted = (a, b) => gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade);
  let sortedJJK = [...jjk];
  
if(select === 'By Grade'){
    sortedJJK.sort(sorted);
  }else if(select === 'Only Special'){
    sortedJJK = sortedJJK.filter((char) => char.grade === 'special grade');
  }
return(
  <div id="container">
    {sortedJJK.map((char) => (
      <div className="jjk-info" key={char.name}>
        <p>Name: {char.name}</p>
        <p>Age: {char.age}</p>
        <p>Power: {char.power}</p>
        <p>Nickname: {char.nickname}</p>
        <p>Grade: {char.grade}</p>
      </div>
    ))}
  </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(<App />);
