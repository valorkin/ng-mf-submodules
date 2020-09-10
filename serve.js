const colors = require('colors/safe');
const httpServer = require('http-server/lib/http-server');

const logger = {
    info: console.log,
    request: function (req, res, error) {
        var date = utc ? new Date().toUTCString() : new Date();
        var ip = argv['log-ip']
            ? req.headers['x-forwarded-for'] || '' + req.connection.remoteAddress
            : '';
        if (error) {
            logger.info(
                '[%s] %s "%s %s" Error (%s): "%s"',
                date, ip, colors.red(req.method), colors.red(req.url),
                colors.red(error.status.toString()), colors.red(error.message)
            );
        } else {
            logger.info(
                '[%s] %s "%s %s" "%s"',
                date, ip, colors.cyan(req.method), colors.cyan(req.url),
                req.headers['user-agent']
            );
        }
    }
};

const options = [
    {root: './dist/shell', port: 5000},
    {root: './dist/ng9-app', port: 3000},
    {root: './dist/ng10-app', port: 3001},
    {root: './dist/ng8-app', port: 3002},

];
options.map(option => listen(option));

function listen(options) {
    let {port, host} = options;
    host = host || '127.0.0.1';

    const server = httpServer.createServer(options);
    server.listen(port, host, function () {
        const canonicalHost = host === '0.0.0.0' ? '127.0.0.1' : host;
        const protocol = 'http://';

        logger.info([colors.yellow('Starting up http-server, serving '),
            colors.cyan(server.root),
            colors.yellow('\nAvailable on: ' + protocol + canonicalHost + ':' + colors.green(port.toString()))
        ].join(''));

    });
}

logger.info('Hit CTRL-C to stop the server');
process.on('SIGINT', function () {
    console.warn('http-server stopped.');
    process.exit();
});

process.on('SIGTERM', function () {
    console.warn('http-server stopped.');
    process.exit();
});
