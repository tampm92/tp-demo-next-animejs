import React, { useEffect } from 'react';
import anime from 'animejs';

const AnimeLogo = () => {
  const createAnime = () => {
    const bouncePath = anime.path('.bounce path');
    anime.set(['.letter-a', '.letter-n', '.letter-i'], { translateX: 70 });
    anime.set('.letter-e', { translateX: -70 });
    anime.set('.dot', { translateX: 630, translateY: -200 });
    anime
      .timeline({
        autoplay: true,
        easing: 'easeOutSine',
        loop: true
      })
      .add(
        {
          targets: '.letter-i .line',
          duration: 0,
          begin(a) {
            a.animatables[0].target.removeAttribute('stroke-dasharray');
          }
        },
        0
      )
      .add(
        {
          targets: '.bounced',
          transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
          translateY: [
            {
              value: [150, -160],
              duration: 190,
              endDelay: 20,
              easing: 'cubicBezier(0.225, 1, 0.915, 0.980)'
            },
            { value: 4, duration: 120, easing: 'easeInQuad' },
            { value: 0, duration: 120, easing: 'easeOutQuad' }
          ],
          scaleX: [
            { value: [0.25, 0.85], duration: 190, easing: 'easeOutQuad' },
            { value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine' },
            { value: 1, duration: 260, delay: 25, easing: 'easeOutQuad' }
          ],
          scaleY: [
            { value: [0.3, 0.8], duration: 120, easing: 'easeOutSine' },
            { value: 0.35, duration: 120, delay: 180, easing: 'easeInOutSine' },
            { value: 0.57, duration: 180, delay: 25, easing: 'easeOutQuad' },
            { value: 0.5, duration: 190, delay: 15, easing: 'easeOutQuad' }
          ],
          delay: anime.stagger(80)
        },
        1000
      )
      .add(
        {
          targets: '.dot',
          opacity: { value: 1, duration: 100 },
          translateY: 250,
          scaleY: [4, 0.7],
          scaleX: { value: 1.3, delay: 100, duration: 200 },
          duration: 280,
          easing: 'cubicBezier(0.350, 0.560, 0.305, 1)'
        },
        // '-=290'
      )
      .add(
        {
          targets: '.letter-m .line',
          easing: 'easeOutElastic(1, .8)',
          duration: 600,
          d(el) {
            return el.dataset.d2;
          },
          begin(a) {
            a.animatables[0].target.removeAttribute('stroke-dasharray');
          }
        },
        '-=140'
      )
      .add(
        {
          targets: ['.letter-a', '.letter-n', '.letter-i', '.letter-e'],
          translateX: 0,
          easing: 'easeOutElastic(1, .6)',
          duration: 800,
          delay: anime.stagger(40, { from: 2.5 }),
          change(a) {
            a.animatables[2].target.removeAttribute('stroke-dasharray');
          }
        },
        '-=600'
      )
      .add(
        {
          targets: '.letter-m .line',
          d(el) {
            return el.dataset.d3;
          },
          easing: 'spring(.2, 200, 3, 60)'
        },
        '-=680'
      )
      .add(
        {
          targets: '.dot',
          translateX: 430,
          translateY: bouncePath('y'),
          rotate: { value: '1turn', duration: 790 },
          scaleX: { value: 1, duration: 50, easing: 'easeOutSine' },
          scaleY: [
            { value: [1, 1.5], duration: 50, easing: 'easeInSine' },
            { value: 1, duration: 50, easing: 'easeOutExpo' }
          ],
          easing: 'cubicBezier(0, .74, 1, .255)',
          duration: 800
        },
        '-=1273'
      )
      .add(
        {
          targets: '.dot',
          scale: 1,
          rotate: '1turn',
          scaleY: { value: 0.5, duration: 150, delay: 230 },
          translateX: 430,
          translateY: [
            { value: 244, duration: 100 },
            { value: 204, duration: 200, delay: 130 },
            { value: 224, duration: 225, easing: 'easeOutQuad', delay: 25 }
          ],
          duration: 200,
          easing: 'easeOutSine'
        },
        '-=474'
      )
      .add(
        {
          targets: '.letter-i .line',
          transformOrigin: ['50% 100% 0', '50% 100% 0'],
          d(el) {
            return el.dataset.d2;
          },
          easing: 'cubicBezier(0.400, 0.530, 0.070, 1)',
          duration: 80
        },
        '-=670'
      )
      .add(
        {
          targets: '.logo-letter',
          translateY: [
            { value: 40, duration: 150, easing: 'easeOutQuart' },
            { value: 0, duration: 800, easing: 'easeOutElastic(1, .5)' }
          ],
          strokeDashoffset: [anime.setDashoffset, 0],
          delay: anime.stagger(60, { from: 'center' })
        },
        '-=670'
      )
      .add(
        {
          targets: '.bounced',
          scaleY: [
            { value: 0.4, duration: 150, easing: 'easeOutQuart' },
            { value: 0.5, duration: 800, easing: 'easeOutElastic(1, .5)' }
          ],
          delay: anime.stagger(60, { from: 'center' })
        },
        '-=1090'
      )
      .add(
        {
          targets: '.logo-text',
          translateY: [
            { value: 20, easing: 'easeOutQuad', duration: 100 },
            { value: 0, easing: 'easeOutElastic(1, .9)', duration: 450 }
          ],
          opacity: { value: [0.001, 1], duration: 50 },
          duration: 500
        },
        '-=970'
      )
      .add(
        {
          targets: '.main-logo-circle',
          opacity: { value: [0.001, 1], duration: 1500 },
          backgroundImage: [
            'linear-gradient(-135deg, #FFFFFF 50%, #F6F4F2 75%, #F6F4F2 100%, #DDDAD7 100%)',
            'linear-gradient(-135deg, #FFFFFF 5%, #F6F4F2 40%, #F6F4F2 70%, #DDDAD7 100%)'
          ],
          translateY: {
            value: ['60px', 0],
            easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'
          },
          duration: 2000,
          easing: 'easeInOutQuad'
        },
        '-=970'
      )
      .add(
        {
          targets: ['.description-title', '.description-paragraph'],
          opacity: {
            value: [0.001, 1],
            easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'
          },
          translateY: {
            value: ['80px', 0],
            easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'
          },
          duration: 3500,
          delay: anime.stagger(75)
        },
        '-=1300'
      );
  };
  const fitElementToParent = (el, padding, exception) => {
    let timeout = null;
    const resize = () => {
      if (timeout) clearTimeout(timeout);
      anime.set(el, { scale: 1 });
      if (exception) anime.set(exception, { scale: 1 });
      const pad = padding || 0;
      const parentEl = el.parentNode;
      const elOffsetWidth = el.offsetWidth - pad;
      const parentOffsetWidth = parentEl.offsetWidth;
      const ratio = parentOffsetWidth / elOffsetWidth;
      const invertedRatio = elOffsetWidth / parentOffsetWidth;
      const exceptionEl = document.querySelector(exception);
      exceptionEl.setAttribute('width', el.offsetWidth * ratio);
      timeout = setTimeout(() => {
        anime.set(el, { scale: ratio });
        if (exception) anime.set(exception, { scale: invertedRatio });
      }, 10);
    };
    resize();
    window.addEventListener('resize', resize);
  };

  useEffect(() => {
    const logoAnimationEl = document.querySelector('.logo-animation');
    fitElementToParent(logoAnimationEl, 0, '.bounce svg');
    createAnime();
  }, []);

  return (
    <>
      <div className="main-logo">
        <div className="logo-animation-wrapper">
          <div className="logo-animation">
            <div className="anime-logo">
              <div className="anime-logo-signs">
                <div className="logo-letter letter-a">
                  <svg className="bounced" viewBox="0 0 200 240" width="200" height="240">
                    <path
                      className="line"
                      d="M30 20h130c9.996 0 10 40 10 60v140H41c-11.004 0-11-40-11-60s-.004-60 10-60h110"
                    />
                  </svg>
                </div>
                <div className="logo-letter letter-n">
                  <svg className="bounced" viewBox="0 0 200 240" width="200" height="240">
                    <path
                      className="line"
                      d="M170 220V60c0-31.046-8.656-40-19.333-40H49.333C38.656 20 30 28.954 30 60v160"
                    />
                  </svg>
                </div>
                <div className="logo-letter letter-i">
                  <svg className="bounced" viewBox="0 0 60 240" width="60" height="240">
                    <path className="line" d="M30 20v200" data-d2="M30 100v120" />
                  </svg>
                </div>
                <div className="logo-letter letter-m">
                  <svg
                    className="bounced"
                    viewBox="0 0 340 240"
                    width="340"
                    height="240"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      className="line"
                      d="M240,220 L240,60 C240,28.954305 231.344172,20 220.666667,20 C171.555556,20 254.832031,20 170,20 C85.1679688,20 168.444444,20 119.333333,20 C108.655828,20 100,28.954305 100,60 L100,220"
                      data-d2="M310,220 L310,60 C310,28.954305 301.344172,20 290.666667,20 C241.555556,20 254.832031,110 170,110 C85.1679688,110 98.4444444,20 49.3333333,20 C38.6558282,20 30,28.954305 30,60 L30,220"
                      data-d3="M310,220 L310,60 C310,28.954305 301.344172,20 290.666667,20 C241.555556,20 254.832031,20 170,20 C85.1679688,20 98.4444444,20 49.3333333,20 C38.6558282,20 30,28.954305 30,60 L30,220"
                    />
                  </svg>
                </div>
                <div className="logo-letter letter-e">
                  <svg className="bounced" viewBox="0 0 200 240" width="200" height="240">
                    <path
                      className="line"
                      d="M50 140h110c10 0 10-40 10-60s0-60-10-60H40c-10 0-10 40-10 60v80c0 20 0 60 10 60h130"
                    />
                  </svg>
                </div>
                <div className="bounce">
                  <svg viewBox="0 0 600 260" width="600" height="260" fill="none">
                    <path
                      d="M630,240 C630,111.154418 608.971354,40 530.160048,40 C451.348741,40 430,127.460266 430,210"
                    />
                  </svg>
                  <div className="dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
            .main-logo {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 600px;
            }
            .logo-animation-wrapper {
                position: relative;
                width: 100%;
                padding-bottom: 12%;
            }
            .logo-animation {
                pointer-events: none;
                overflow: visible;
                display: flex;
                flex-shrink: 0;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 1000px;
                height: 240px;
                margin: -120px 0 0 -500px;
                /*transform: scale(.633333);*/
            }
            .anime-logo {
                overflow: visible;
                position: relative;
                display: flex;
                flex-direction: column;
                width: 1000px;
                height: 120px;
            }
            .anime-logo-signs {
                overflow: visible;
                display: flex;
                align-items: flex-end;
                position: relative;
                width: 100%;
                height: 512px;
                margin-top: -352px;
            }
            .logo-letter {
                display: flex;
                align-items: flex-end;
                overflow: hidden;
                height: 100%;
            }
            .bounced {
                transform-origin: 50% 100% 0px;
                transform: translateY(200px) scaleX(0.55) scaleY(0.8);
            }
            .logo-animation .bounce {
                overflow: visible;
                position: absolute;
                left: 0;
                bottom: 70px;
                /*      stroke: red;*/
            }
            .logo-animation .dot {
                opacity: 0.001;
                position: absolute;
                z-index: 10;
                top: 0;
                left: 0;
                width: 40px;
                height: 40px;
                margin: -20px 0 0 -20px;
                background-color: currentColor;
                transform: translate3d(0, 0, 0);
            }
            .logo-animation .logo-letter svg {
                overflow: visible;
                fill: none;
                fill-rule: evenodd;
            }
            .logo-animation .line {
                stroke-linecap: square;
                stroke-width: 40;
                stroke: currentColor;
            }
            .logo-animation .fill {
                opacity: 0.001;
                stroke: currentColor;
                stroke-width: 40px;
            }
            .logo-text {
                opacity: 0.001;
                margin-top: 0.25em;
                font-weight: 400;
                font-size: 11px;
                line-height: 1;
                letter-spacing: 0.125em;
                text-align: justify;
                word-break: keep-all;
            }
            .logo-text:after {
                content: "";
                display: inline-block;
                width: 100%;
                height: 0;
                font-size: 0;
                line-height: 0;
            }
        `}
      </style>
    </>
  );
};

export default AnimeLogo;