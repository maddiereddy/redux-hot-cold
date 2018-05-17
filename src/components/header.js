import React from 'react';
import TopNav from './top-nav';
import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav 
      	onRestartGame={() => props.onRestartGame()}
      	onShowInfo={() => props.onShowInfo()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
