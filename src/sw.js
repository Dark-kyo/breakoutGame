if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}})).then(e=>{const s=i(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-58c123a0"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"capacitor.config.json",revision:"3000acc9d70a13f95ffc33e369fad894"},{url:"components/ball.js",revision:"408649c5a45a1a1ea319f2e35656ddd6"},{url:"components/button.js",revision:"22a5cd09a5842e4ae1d8b09b82f6f8ee"},{url:"components/diamonds.js",revision:"a9117e57a4a8a136e163f130b557c452"},{url:"components/live-counter.js",revision:"5d0404efa297406c399f376f95af86f1"},{url:"components/mobile-controls.js",revision:"d6126b2a4b7895798ad86f86ba66795b"},{url:"components/phases/phase-constructor.js",revision:"d15165c30097712331819e1caa71c2ac"},{url:"components/phases/phase.js",revision:"48785498cc475c84c47d975694e8d4c2"},{url:"components/phases/phase1.js",revision:"7e6f259204024fbf43d14f4dcce367ed"},{url:"components/phases/phase2.js",revision:"972fa30d5c2aee75f09323a5196a9236"},{url:"components/phases/phase3.js",revision:"fa2663a4aa7663bc0b14db5335209643"},{url:"components/phases/phase4.js",revision:"c1e1f43c255410e2bac069b7ccd311d5"},{url:"components/phases/phase5.js",revision:"eb77b6724bc49948e517fbfa9cd0701c"},{url:"components/phases/phase6.js",revision:"492f138929e734c5629f4bd723e64976"},{url:"components/platform.js",revision:"c5b4e127c570b94aa91e97e5358d2b9b"},{url:"components/play-button.js",revision:"6864db4c2d2df0fe610f3078bd75e430"},{url:"components/powers/glue-power.js",revision:"8fb53bc5db8a16db5d27dbf0295e642c"},{url:"components/powers/large-platform-power.js",revision:"a0e5f99b0e87338b782658a6f811e76e"},{url:"components/powers/live-power.js",revision:"d20fdf4b4da002770ff1f54570b43cb6"},{url:"components/powers/power.js",revision:"c699d2db47440ce3da1694fff7d97f40"},{url:"components/restart-button.js",revision:"86f982c0fa3da31e6c70543970c91b4c"},{url:"icons/android-chrome-192x192.png",revision:"87966792ab62c609648c59ab463cdaae"},{url:"icons/android-chrome-512x512.png",revision:"ceae401719509773e63412ff1ac66115"},{url:"icons/apple-touch-icon.png",revision:"dad72e4c1e43e86d9452e27b36f687fe"},{url:"icons/favicon-16x16.png",revision:"1ccd87086f3daf7c727feb94f3d668ab"},{url:"icons/favicon-32x32.png",revision:"db92407d2d653048da0b5b9381214c35"},{url:"icons/favicon.ico",revision:"f5b4b16629fc0ed525175f9b80515271"},{url:"icons/mstile-150x150.png",revision:"f2f5cceaa72a6e42f240737798600173"},{url:"icons/safari-pinned-tab.svg",revision:"46273397c23c7f9279c8f4b350dc5fdb"},{url:"images/background-preload.png",revision:"bbb0257f80a18c5df5cd7097627e7997"},{url:"images/background.png",revision:"74c2a6ee942c104cff5a9e1c41d6248a"},{url:"images/ball.png",revision:"05e907b037b5b81c1bfda4efee64e97c"},{url:"images/blue_diamond-sprites.png",revision:"dd8baf71ee1f954f272bbca1091d4e73"},{url:"images/brickBlack.png",revision:"40ccdcbb44a3deb23500ae479417e325"},{url:"images/brickBlue.png",revision:"7c6d7456b8723d6f476ab66269e148ca"},{url:"images/brickGreen.png",revision:"36f56e8ad27cc9ede59a457eb0e59ea0"},{url:"images/brickGrey.png",revision:"24f8843d08072faf8551a612ae9bd4b3"},{url:"images/brickOrange.png",revision:"32d1d2cc446f4dc5e36a0865cc79f349"},{url:"images/brickWhite.png",revision:"743afc146e906a5b68c1274cf12b7ba1"},{url:"images/brickYellow.png",revision:"4d2c06ca8179b83a3758e10d722bf8e1"},{url:"images/congratulations.png",revision:"bb0c5b5193ca0ff169298cf0c79a230e"},{url:"images/gameover.png",revision:"e321f21309bde775987afe33657bc01a"},{url:"images/green_diamond-sprites.png",revision:"831178ffa3d51d8a331e0ed592e6ef65"},{url:"images/launchbutton.png",revision:"694a8bf532d128bc38721af9b5d4f142"},{url:"images/left.png",revision:"4eda95930520d24cc79b7844e8247b8a"},{url:"images/platform.png",revision:"4b454ab77ba9ff238fa482a974be6fec"},{url:"images/platform2.png",revision:"744d7c9f061c66104e548fe3c395a86a"},{url:"images/playbutton.png",revision:"eb34a163c6e4d4a9e33561385b54a40e"},{url:"images/red_diamond-sprites.png",revision:"8557cf7d7fd19f4f6c8bd61208393cd4"},{url:"images/restart.png",revision:"ec8ed437224b653023de165e9c326f7d"},{url:"images/right.png",revision:"7eb592e552f7de1b6c2a07cef1f8095c"},{url:"package-lock.json",revision:"eaff8f4433c474c846f08a0687ba7055"},{url:"package.json",revision:"3f2f916f7c9b767de16164f7437adae0"},{url:"src/browserconfig.xml",revision:"e518b9893d7dfba21be7c1828c116d4f"},{url:"src/index.html",revision:"95150986ebb073199ebffa1464ac0d73"},{url:"src/index.js",revision:"2e0e5c9c5052b06b35cbfef36b49b752"},{url:"src/phaser.min.js",revision:"44b4e861a32e955080c1b4361e5eb24c"},{url:"src/scenes/congratulations.js",revision:"8c28b5023810a7875353e21d5858fb9d"},{url:"src/scenes/game.js",revision:"f9129738efb136e01591276445207d31"},{url:"src/scenes/gameover.js",revision:"60f8e081547a28306698c2fba9cdca79"},{url:"src/scenes/loader.js",revision:"c4b2c607052b0f3e98c754639cb90ae5"},{url:"src/site.webmanifest",revision:"6711989ffce55daa85def83c2101154b"},{url:"src/sounds/breakout.mp3",revision:"e50bbb1fe55fa793cf2758d3ae209950"},{url:"src/sounds/brick-impact.ogg",revision:"2d015f7355a7330451d9042dceac980a"},{url:"src/sounds/fixed-brick-impact.ogg",revision:"ab6a18c9fc1dced884d247b48233eff4"},{url:"src/sounds/gameover.ogg",revision:"2d4cbe16ac8fadce3c09b52099d30213"},{url:"src/sounds/live-lost.ogg",revision:"7d23176bf243e117eed8ff065801cc6a"},{url:"src/sounds/phasechange.ogg",revision:"2de7341186b08584874a19ebe928e298"},{url:"src/sounds/platform-impact.ogg",revision:"d202e4d4faa9d8b6e9f8b63ed7093db7"},{url:"src/sounds/start-game.ogg",revision:"cd120a5b74920e0743d7fd84eac1f779"},{url:"src/sounds/you_win.ogg",revision:"b6eb348a16eef14af4fd373efc92b755"},{url:"sw.js",revision:"7af99dad249c995d225e8e6a18d51aff"},{url:"webpack.config.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"workbox-58c123a0.js",revision:"a54f03cc4327a3650ed390544e573c89"},{url:"workbox-config.js",revision:"7b54887c7615dbfb1f178315cbb70160"}],{})}));
//# sourceMappingURL=sw.js.map