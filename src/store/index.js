// Use require.context to require reducers automatically
// Ref: https://webpack.github.io/docs/context.html
const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const reducers = [];
for (let i = 0; i < keys.length; i += 1) {
	reducers.push(context(keys[i]));
}

export default reducers;
