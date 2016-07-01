# Snowpack

> Webpack your Snowplow tracking
 
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

If you omit `options.appId`, it will be set the your domain, stripped from any `www.` and with `.` changed to `-` (eg. `www.google.com` will become `google-com`).

You can either specify a `cookieDomain` option or not. If you omit it, it will be set to the hostname without `www.`. You can also specify a `cookieDomainRemove` string that will be removed from the hostname (eg. `finance.google.com` will become `google.com` if you set this option to `finance.`).

## Run devserver

`docker-compose up`

Open `<your-docker-ip>:8080`.

Open up [`src/index.html`](src/index.html) to understand what's happening.

## Build

`./scripts/build.sh`
