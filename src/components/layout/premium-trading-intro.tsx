'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const SEEN_KEY = 'aaa-premium-intro-seen';

export function PremiumTradingIntro() {
  const [visible, setVisible] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(SEEN_KEY) === '1';
      window.localStorage.setItem(SEEN_KEY, '1');
    } catch {
      // Private browsing may block storage; the intro still works for this visit.
    }

    setFirstVisit(!seen);
    setVisible(true);

    const duration = reduceMotion ? 650 : seen ? 1850 : 4700;
    const timer = window.setTimeout(() => setVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  const close = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          className="aaa-intro"
          role="dialog"
          aria-modal="true"
          aria-label="ABDULLOH TREder — kirish animatsiyasi"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.035, filter: 'blur(12px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aaa-intro__grid" aria-hidden="true" />
          <div className="aaa-intro__aurora aaa-intro__aurora--one" aria-hidden="true" />
          <div className="aaa-intro__aurora aaa-intro__aurora--two" aria-hidden="true" />

          <div className="aaa-intro__topline">
            <span className="aaa-intro__brandmark"><span /> AAA CAPITAL / DIGITAL MARKETS</span>
            <span className="aaa-intro__live"><i /> BOZOR ONLAYN</span>
          </div>

          <div className="aaa-intro__scene">
            <div className="aaa-intro__orbit aaa-intro__orbit--one" aria-hidden="true" />
            <div className="aaa-intro__orbit aaa-intro__orbit--two" aria-hidden="true" />
            <div className="aaa-intro__orbit aaa-intro__orbit--three" aria-hidden="true" />

            <div className="aaa-intro__globe" aria-hidden="true">
              <div className="aaa-intro__globe-shine" />
              <div className="aaa-intro__globe-map" />
              <div className="aaa-intro__globe-grid" />
              <div className="aaa-intro__globe-core" />
            </div>

            <div className="aaa-intro__coin aaa-intro__coin--btc" aria-hidden="true">₿</div>
            <div className="aaa-intro__coin aaa-intro__coin--eth" aria-hidden="true">◆</div>

            <div className="aaa-intro__chart" aria-hidden="true">
              <span style={{ height: '24%' }} /><span style={{ height: '38%' }} />
              <span style={{ height: '31%' }} /><span style={{ height: '52%' }} />
              <span style={{ height: '44%' }} /><span style={{ height: '68%' }} />
              <span style={{ height: '57%' }} /><span style={{ height: '82%' }} />
              <span style={{ height: '73%' }} /><span style={{ height: '96%' }} />
              <span style={{ height: '84%' }} /><span style={{ height: '100%' }} />
            </div>

            <motion.div
              className="aaa-intro__portrait-wrap"
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="aaa-intro__portrait-halo" />
              <div className="aaa-intro__portrait">
                <img src="/founder.jpg" alt="ABDULLOH — asoschi" />
              </div>
              <span className="aaa-intro__portrait-label">ASOSCHI / ABDULLOH</span>
            </motion.div>
          </div>

          <motion.div
            className="aaa-intro__copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48 }}
          >
            <p className="aaa-intro__eyebrow">PREMIUM TRADING PLATFORM</p>
            <h1>ABDULLOH <span>TREder</span></h1>
            <p className="aaa-intro__tagline">Savdo — bu imkoniyat!</p>
            <div className="aaa-intro__features">
              <span>Onlayn savdo</span><b>✦</b><span>Xavfsiz platforma</span><b>✦</b><span>Tezkor tahlil</span>
            </div>
            <p className="aaa-intro__subline">BOZOR HOLATI <i /> RAQAMLI MOLIYA</p>
          </motion.div>

          <div className="aaa-intro__bottom">
            <span>AAA <b>•</b> CRYPTO / SPOT / STOCKS</span>
            <button type="button" onClick={close}>O‘tkazib yuborish <span>↗</span></button>
          </div>

          <style jsx global>{`
            .aaa-intro{position:fixed;inset:0;z-index:10000;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(ellipse at 50% 42%,#101e2d 0%,#070c16 46%,#03050a 100%);color:#f5f8ff;font-family:var(--font-geist-sans),Arial,sans-serif;isolation:isolate}
            .aaa-intro *{box-sizing:border-box}
            .aaa-intro__grid{position:absolute;inset:-30%;opacity:.17;background-image:linear-gradient(rgba(82,205,190,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(82,205,190,.13) 1px,transparent 1px);background-size:58px 58px;transform:perspective(700px) rotateX(62deg) scale(1.5);mask-image:linear-gradient(transparent,#000 25%,#000 75%,transparent)}
            .aaa-intro__aurora{position:absolute;width:48vw;height:48vw;border-radius:50%;filter:blur(90px);pointer-events:none;opacity:.2}
            .aaa-intro__aurora--one{background:#00d5a0;left:-20%;top:10%}
            .aaa-intro__aurora--two{background:#1979c9;right:-20%;bottom:0}
            .aaa-intro__topline,.aaa-intro__bottom{position:absolute;left:0;right:0;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:26px clamp(18px,5vw,72px);font-size:10px;letter-spacing:.19em;color:#8b9bad}
            .aaa-intro__topline{top:0}.aaa-intro__bottom{bottom:0}
            .aaa-intro__brandmark{display:flex;align-items:center;gap:10px}.aaa-intro__brandmark span{width:7px;height:7px;border-radius:50%;background:#42e6b3;box-shadow:0 0 15px #42e6b3}
            .aaa-intro__live{display:flex;align-items:center;gap:8px;color:#7fe6c6}.aaa-intro__live i{width:6px;height:6px;border-radius:50%;background:#38e6a7;box-shadow:0 0 10px #38e6a7}
            .aaa-intro__scene{position:relative;width:min(76vw,690px);height:min(53vh,500px);min-height:300px;display:grid;place-items:center;perspective:1100px;transform-style:preserve-3d}
            .aaa-intro__globe{position:absolute;width:clamp(210px,29vw,360px);aspect-ratio:1;border-radius:50%;overflow:hidden;transform:rotateX(-12deg) rotateY(-18deg);background:radial-gradient(circle at 32% 28%,rgba(91,231,215,.6),transparent 9%),radial-gradient(circle at 38% 34%,#174c63 0%,#0c263e 42%,#07111f 72%);box-shadow:inset -32px -20px 55px #020711,inset 15px 10px 32px rgba(86,232,215,.28),0 0 65px rgba(21,188,171,.23),0 0 150px rgba(18,100,180,.14);animation:aaa-globe-float 8s ease-in-out infinite}
            .aaa-intro__globe-shine{position:absolute;inset:0;border-radius:50%;background:linear-gradient(125deg,rgba(255,255,255,.27),transparent 28% 68%,rgba(0,0,0,.5))}
            .aaa-intro__globe-map{position:absolute;inset:13%;border-radius:48%;opacity:.42;background:radial-gradient(ellipse at 32% 34%,#6ce0bc 0 7%,transparent 7.5%),radial-gradient(ellipse at 43% 44%,#6ce0bc 0 11%,transparent 11.5%),radial-gradient(ellipse at 65% 33%,#6ce0bc 0 9%,transparent 9.5%),radial-gradient(ellipse at 70% 61%,#6ce0bc 0 6%,transparent 6.5%);filter:blur(1px)}
            .aaa-intro__globe-grid{position:absolute;inset:0;border-radius:50%;background:repeating-linear-gradient(0deg,transparent 0 24px,rgba(112,225,220,.15) 25px,transparent 26px),repeating-linear-gradient(90deg,transparent 0 30px,rgba(112,225,220,.12) 31px,transparent 32px);mask-image:radial-gradient(circle,#000 56%,transparent 71%)}
            .aaa-intro__globe-core{position:absolute;inset:7%;border:1px solid rgba(111,234,219,.24);border-radius:50%;box-shadow:0 0 24px rgba(61,227,198,.1)}
            .aaa-intro__orbit{position:absolute;width:clamp(300px,48vw,620px);height:clamp(115px,18vw,220px);border:1px solid rgba(74,221,201,.48);border-radius:50%;transform:rotate(-22deg) rotateX(67deg);box-shadow:0 0 18px rgba(34,213,184,.1);animation:aaa-orbit 13s linear infinite}
            .aaa-intro__orbit--two{width:clamp(350px,54vw,690px);height:clamp(145px,21vw,260px);transform:rotate(32deg) rotateX(68deg);border-color:rgba(80,145,235,.42);animation-duration:17s;animation-direction:reverse}
            .aaa-intro__orbit--three{width:clamp(250px,39vw,500px);height:clamp(190px,29vw,340px);transform:rotate(75deg) rotateY(62deg);border-color:rgba(240,190,93,.24);animation-duration:21s}
            .aaa-intro__portrait-wrap{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center;transform:translateY(5px)}
            .aaa-intro__portrait-halo{position:absolute;width:clamp(165px,20vw,230px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(38,225,179,.3),rgba(23,111,148,.13) 52%,transparent 72%);filter:blur(12px);transform:scale(1.35)}
            .aaa-intro__portrait{position:relative;width:clamp(142px,17vw,194px);height:clamp(172px,21vw,238px);overflow:hidden;border-radius:48% 48% 23px 23px;border:1px solid rgba(123,239,219,.7);background:#101d2a;box-shadow:0 0 0 7px rgba(39,214,181,.07),0 0 45px rgba(40,225,190,.25),0 24px 65px rgba(0,0,0,.55)}
            .aaa-intro__portrait img{width:100%;height:100%;object-fit:cover;object-position:center 24%;display:block;filter:saturate(.88) contrast(1.06)}
            .aaa-intro__portrait-label{margin-top:12px;font-size:9px;letter-spacing:.22em;color:#b7d8d5;text-shadow:0 0 12px #20b99b}
            .aaa-intro__coin{position:absolute;z-index:4;display:grid;place-items:center;width:46px;height:46px;border-radius:50%;font-weight:800;font-size:25px;box-shadow:inset 0 0 0 2px rgba(255,255,255,.3),0 8px 28px rgba(0,0,0,.45);animation:aaa-coin 5s ease-in-out infinite}
            .aaa-intro__coin--btc{left:12%;top:22%;color:#fff1c5;background:radial-gradient(circle at 30% 25%,#ffe5a1,#b77920 72%);border:1px solid #ffdc8a}
            .aaa-intro__coin--eth{right:12%;bottom:22%;color:#d9e6ff;background:radial-gradient(circle at 30% 25%,#8fb8ff,#263e7e 72%);border:1px solid #8fb8ff;animation-delay:-2s}
            .aaa-intro__chart{position:absolute;right:0;top:17%;height:48%;width:18%;display:flex;align-items:flex-end;gap:5px;opacity:.52;transform:skewY(-13deg)}
            .aaa-intro__chart span{flex:1;min-width:3px;border-radius:3px 3px 0 0;background:linear-gradient(#64edb9,rgba(44,180,163,.12));box-shadow:0 0 10px rgba(69,225,183,.18)}
            .aaa-intro__copy{position:relative;z-index:4;text-align:center;margin-top:-10px;padding:0 18px}
            .aaa-intro__eyebrow{font-size:9px;letter-spacing:.42em;color:#71d8c2;margin:0 0 12px}
            .aaa-intro__copy h1{font-size:clamp(30px,5.5vw,66px);font-weight:850;letter-spacing:-.055em;line-height:1;margin:0;text-shadow:0 8px 35px rgba(0,0,0,.5)}
            .aaa-intro__copy h1 span{background:linear-gradient(105deg,#e8f8f5 5%,#57e5bd 48%,#d6a953 95%);background-clip:text;-webkit-background-clip:text;color:transparent}
            .aaa-intro__tagline{font-size:clamp(14px,1.7vw,20px);font-weight:500;color:#d4e8e5;letter-spacing:.04em;margin:13px 0 15px}
            .aaa-intro__features{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:10px 15px;color:#9eafbf;font-size:10px;letter-spacing:.06em}
            .aaa-intro__features b{color:#e4bd6d;font-size:9px}
            .aaa-intro__subline{margin:16px 0 0;font-size:8px;letter-spacing:.3em;color:#688295}.aaa-intro__subline i{display:inline-block;width:22px;height:1px;background:#37cdb1;vertical-align:middle;margin:0 10px}
            .aaa-intro__bottom button{border:1px solid rgba(116,218,199,.27);background:rgba(9,21,32,.58);color:#b6d8d3;border-radius:999px;padding:9px 14px;font-size:10px;letter-spacing:.04em;cursor:pointer;transition:background .2s,border-color .2s}
            .aaa-intro__bottom button:hover{background:rgba(38,157,140,.2);border-color:#55d9bd}.aaa-intro__bottom button span{color:#6fe5c2;margin-left:6px}
            @keyframes aaa-orbit{from{rotate:0deg}to{rotate:360deg}}
            @keyframes aaa-globe-float{0%,100%{translate:0 0}50%{translate:0 -9px}}
            @keyframes aaa-coin{0%,100%{translate:0 0;rotate:-8deg}50%{translate:0 -13px;rotate:9deg}}
            @media(max-width:640px){.aaa-intro__topline,.aaa-intro__bottom{padding:17px 16px;font-size:8px;letter-spacing:.1em}.aaa-intro__scene{width:100vw;height:43vh;min-height:250px;margin-top:22px}.aaa-intro__globe{width:clamp(190px,62vw,280px)}.aaa-intro__orbit{width:88vw;height:31vw}.aaa-intro__orbit--two{width:96vw;height:38vw}.aaa-intro__orbit--three{width:76vw;height:48vw}.aaa-intro__coin{width:34px;height:34px;font-size:19px}.aaa-intro__coin--btc{left:9%;top:19%}.aaa-intro__coin--eth{right:8%;bottom:18%}.aaa-intro__chart{right:5%;width:18%;height:35%}.aaa-intro__copy{margin-top:-3px}.aaa-intro__features{gap:7px 9px;font-size:9px}.aaa-intro__eyebrow{letter-spacing:.25em}.aaa-intro__portrait{width:124px;height:155px}.aaa-intro__portrait-label{font-size:8px}}
            @media(max-height:680px) and (min-width:641px){.aaa-intro__scene{height:43vh;min-height:230px}.aaa-intro__portrait{height:155px;width:125px}.aaa-intro__copy h1{font-size:42px}}
            @media(prefers-reduced-motion:reduce){.aaa-intro__orbit,.aaa-intro__globe,.aaa-intro__coin{animation:none!important}}
          `}</style>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
