import React, { useEffect } from 'react';
import Link from 'next/link';
import anime from 'animejs';

const TpLogo = () => {
  useEffect(() => {
    const tpLogoAnimation = anime.timeline({
      autoplay: true,
      delay: 200
    });
    tpLogoAnimation
      .add({
        targets: '#tp-logo',
        translateY: [-100, 0],
        opacity: [0, 1],
        elasticity: 600,
        duration: 1600
      })
      .add({
        targets: '#tp-logo',
        rotate: [-360, 0],
        duration: 3000,
        elasticity: 600,
        offset: 100
      })
      .add({
        targets: '#tp-logo-text',
        translateX: ['-100%', 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        offset: 1000
      });
  }, []);
  return (
    <div className="site-tp-logo">
      <Link href="/">
        <a href="/" className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
          <img id="tp-logo" src="/tp.svg" alt="tp-logo" className="w-24 mr-2" />
          <div className="site-title">
            <div id="tp-logo-text" className="site-title__text">
              TP
              {' '}
              <span>Demo</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default TpLogo;
