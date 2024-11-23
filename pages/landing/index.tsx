import React from 'react';
import IconCloudComponent from '@/components/global/cloud';
import CallToAction from '@/components/callToaction';
import Features from '@/components/features';
import Stats from '@/components/stats';
import Hero from '@/components/hero';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white">
      <Hero />
      <Stats />
      <Features />
      <div>
        <IconCloudComponent />
      </div>
      <CallToAction />
    </div>
  );
};

export default LandingPage;