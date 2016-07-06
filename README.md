# Snowpack [![Build Status](https://travis-ci.org/sircelsius/snowpack.svg?branch=master)](https://travis-ci.org/sircelsius/snowpack)

> [Webpack](http://webpack.github.io/) your [Snowplow](http://snowplowanalytics.com/) JS tracking.

While the official snowplow documentation [recommends setting up their JS tracker via Google Tag Manager](https://github.com/snowplow/snowplow/wiki/Integrating-javascript-tags-with-Google-Tag-Manager), if you have tons of tags and dependencies on your website this will significantly increase the delay between the moment when a user lands on one of your pages and the moment when events are sent.

There are workarounds to this (such as [using `localStorage` to store events that haven't been sent](https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker#2213-configuring-localstorage)), but tackling the issue at its root may be a good idea.

Snowpack tries to answer this problem by providing an efficient way of integrating a small (around 10 kB with one tracker setup) script to your pages that will instanciate trackers as fast as possible.

It also includes some goodies such as:
  * ES6 [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) objects so you can get the magic going (yes, they are polyfilled).
  * Minified, Uglified script once built so you don't overuse your user's bandwidth.
  * Cool names: admit it, writing `window.addEventListener('winterIsComing', /* tracking stuff */);` is fun.
   
Right now, you can only define trackers with Snowpack, but one day you will be able to do things like (contributions welcome):
  * Track simple events (pageview, structured events) with contexts.
  * Even more ES6 goodness: `window.makeItSnow().then((snow) => { snow.trackPageView( /* */ )}).catch((ice) => { console.warn(ice) })` looks good, right?
 
## Prerequisites

Create the `src/lib/secure/trackers.json` file. Add your tracker definition like the following:

```` json
[
  {
    "trackerName": "greatTracker",
    "collectorHostname": "my.collector.com",
    "options": {
      "appId": "myApp",
      "encodeBase64": true,
      "cookieDomainRemove": "stringToRemovefromHostname",
      "contexts": {
        "optimizelyStates": true,
        "webPage": true,
        "performanceTiming": true
      }
    }
  }
]

````

  * If you omit `options.appId`, it will be set to your domain, stripped from any `www.` and with `.` changed to `-` (eg. `www.google.com` will become `google-com`).
  * You can either specify a `cookieDomain` option or not. If you omit it, it will be set to the hostname without `www.`. You can also specify a `cookieDomainRemove` string that will be removed from the hostname (eg. `finance.google.com` will become `google.com` if you set this option to `finance.`).

## Run devserver

`docker-compose up`

Open `<your-docker-ip>:8080`.

Open up [`src/index.html`](src/index.html) to understand what's happening.

## Build

`./scripts/build.sh`


