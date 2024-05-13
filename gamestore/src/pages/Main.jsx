import React, { useState, useEffect } from 'react';
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handelToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch('http://localhost:3000/api/gamesData.json')
    .then(res => res.json())
    .ther(data => {
      setGames(data);
    })
    .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active}/>
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handelToggleActive}/>
        <div className="container-fluid">
          <Home games={games} />
        </div>
      </div>
    </main>
  );
}

export default Main
