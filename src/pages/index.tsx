import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import HeroSection from '@/components/HeroSection';
// import Features from '@/components/Features';
// import HowItWorks from '@/components/HowItWorks';
// import Testimonials from '@/components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Study Together</title>
        <meta name="description" content="Schedule and join study sessions with your peers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>HOME</h1>
      </main>

    </div>
  );
};

export default Home;
