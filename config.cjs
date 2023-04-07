const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const projectRoot = process.cwd();

module.exports.contentDirectory = isProd ? path.join(projectRoot, 'content') : 'content';
