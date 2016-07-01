// require all `test/components/**/index.js`
const testsContext = require.context('./src/lib/', true, /\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('./src/test/', true, /test\.js$/);

componentsContext.keys().forEach(componentsContext);
