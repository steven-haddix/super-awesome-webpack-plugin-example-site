const template = require('./template');

module.exports = {
    dataDir: './data',
    sites: [
        {
            // All pages under this site will share this entry, template, and reducers
            entry: 'app',
            template,
            component: './src/components/Wrapper', // wrapper component that wraps each route component
            routes: [
                { path: '/home', component: './src/components/pages/Home' }
            ],
            reducers: {
                content: { content: {} }
            }
        }
    ]
};
