const IDLE_TIME = 100;
const MAX_WAIT = 10;
let WAITED = 0;

const waitForSnaq = (resolve, reject) => {
  if(typeof _snaq === 'function') {
    resolve(_snaq);
    return;
  }
  if(WAITED++ >= MAX_WAIT) {
    reject('Snowplow loading took too long, exiting.');
    return;
  }
  setTimeout(() => {
      waitForSnaq(resolve, reject);
  }, IDLE_TIME);
};

export default () => {
  ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments);
    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
    n.src=w;g.parentNode.insertBefore(n,g);}}		(window,document,'script','//d1fc8wv8zag5ca.cloudfront.net/2.6.2/sp.js','_snaq'));

  return new Promise((resolve, reject) => {
    _snaq(() => {
      waitForSnaq(resolve, reject);
    });
  });
};
