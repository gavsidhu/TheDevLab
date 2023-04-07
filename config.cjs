const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    contentDirectory: isProd ? '/vercel/path0/content' : 'content',
};
