import parseOptions from './optionParser';

export default (trackers, snowplow) => {
  let promises = [];
  for(let tracker of trackers) {
    const trackerName = tracker.trackerName;
    const collector = tracker.collectorHostname;
    const options = parseOptions(tracker.options);

    promises.push(new Promise((resolve, reject) => {
      snowplow('newTracker', trackerName, collector, options);
      snowplow(() => {
        // TODO babel changes `this` to `undefined` when instrumenting. Find a fix
        // if(!this.hasOwnProperty(trackerName)) {
        //   reject(`Tracker ${trackerName} failed to instantiate.`);
        //   return;
        // }
        resolve(snowplow);
      });
    }));
  }
  return Promise.all(promises)
    .then(() => {
      return new Promise((resolve) => {
        resolve(snowplow);
      })
    });
};
