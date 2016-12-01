export default function (assets) {
    return `
    <html lang="en">
        <head>
            <title>My Store</title>
            <script>
                window.__data = ${JSON.stringify(assets.state)};
            </script>
        </head>
        <link rel="stylesheet" type="text/css" href="/${assets.webpack.style.replace('js', 'css')}" />
        <body id="body">
            <div id="app">
                ${assets.html}
            </div>
            <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
            <script src="/${assets.webpack.manifest}"></script>
            <script src="/${assets.webpack.vendor}"></script>
            <script src="${assets.app}"></script>
        </body>
    </html>
    `;
}
