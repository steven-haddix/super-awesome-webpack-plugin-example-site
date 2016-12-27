import styleSheet from './node_modules/styled-components/lib/models/StyleSheet';

export default function (assets) {
    const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return `
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta content="ie=edge" http-equiv="x-ua-compatible">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <title>Example Page</title>
            <script>
                window.__data = ${JSON.stringify(assets.state)};
            </script>
            <link rel="stylesheet" type="text/css" href="/${assets.webpack.style.replace('.js', '.css')}" media="screen" />
            <style type="text/css">
                ${styles}
            </style>
        </head>
        <body id="body">
            <div id="app">
                ${assets.html}
            </div>
            <script src="/${assets.webpack.manifest}"></script>
            <script src="/${assets.webpack.vendor}"></script>
            <script src="${assets.app}"></script>
        </body>
    </html>
    `;
}
