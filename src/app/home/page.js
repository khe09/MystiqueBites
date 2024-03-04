import React from 'react';
import Link from 'next/link';
import './HomeStyles.css';
import backgroundImage from '/Users/katie/bites/mystique_bites/public/images/pexels-nataliya-vaitkevich-9863594.jpg';


function Home() {
  return (
    <div className='home-container'style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Are you ready to spice up<br />your <br />culinary journey?</h1>
      <p>Discover some unique Chinese dishes here</p>
      <Link href="/form"> <button className='start'>START</button></Link>
      </div>
  );
}

export default Home;
