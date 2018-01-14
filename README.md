## Ignite Change Map

## Dev Environment Setup
Ensure you have node v6.10.2+ and yarn installed on your machine then run
```
yarn
```

## Local development server
Start up a local development server with hot-reloading
```
yarn start
```

## Compile assets for production deployment
Assets will compiled to the dist dir by default.
```
yarn run build
```

To run a simple webserver and verify production output you can use
```
yarn run dist:server
```

_Note: requires docker._

## Deployment

First build the app per instructions in the previous step, serve it locally, and make sure things look good.

Then just push the code to https://github.com/centerforbiologicaldiversity/map@master:

```
git push origin master
```

Netlify will be notified of every new Git push to the master branch and will rebuild and deploy the map
with ``yarn run build``, serving the `dist/` output on a static file server.
