import React from 'react'
import ScrollUp from './ScrollUp';
import Hero from '../../components/home/Hero';
import Features from '../../components/Features/Features';
import Applications from '../../components/Applications/Applications';
import Blog from '../../components/Blog/Blog';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <div>
      <ScrollUp />
      <Hero />
      <Features />
      <Applications homepage={true} />
      <Blog fromHome={true} />
      <div className='my-[-80px]'>
      <Contact />
      </div>
    </div>
  )
}

export default Home
