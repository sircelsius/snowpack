import loader from './loader';
import createTrackers from './trackers/creator';
const trackers = require('./secure/trackers.json');
import customEventFill from './utils/customEventFill';

require('es6-promise').polyfill();
customEventFill();

window.makeItSnow = () => {
  return loader()
    .then((snowplow) => {
      return createTrackers(trackers, snowplow);
    });
};

const event = new CustomEvent('winterIsComing');
window.dispatchEvent(event);
