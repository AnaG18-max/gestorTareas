const path = require('path');

module.exports = {
    entry: './src/index.js'. //punto de entrada de la aplicacion
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos css 
                use: ['style-loader', 'css-loader'],// loaders para procesar archivos css
           },
           {
            test: /\.js$/, //regex para identificar archivos js
            exclude: /node_modules/, //excluir la carpeta ode_modules
            use: {
                loader: 'babel-loader', //loader para pasar js moderno a js mas antiguo para todos los navegadores
                options:{
                    presets: ['@babel/preset-env'],
                },
            },
          },
        ],
    },
    devtool: 'source-map' , //generar source maps para facilitar la depuracion 
    devServer{
        contentBase: path.resolve(__dirname, 'dist' ),// carpeta principal del servidor
        compress: trust,//habilitar la compresion gzip
        port: 9000, // puerto de servidor de desarrollo
    },
 };
