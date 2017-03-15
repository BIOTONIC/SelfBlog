var config = {
    title: 'myblog',
    description: 'This is myblog, website build by express.',
    port: 3000,
    session: { // config for express-session
        secret: 'myblog',
        key: 'myblog',
        ttl: 30*24*60*60 // thirty days
    },
    mongodb: 'mongodb://localhost:27017/expresstest'
};

module.exports = config;