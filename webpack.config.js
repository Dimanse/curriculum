import path from 'path';

export default {
    mode: 'development',
    entry: {
       
    },
    output: {
        filename: '[name].js', //nombre de como se guardara el archivo
        path: path.resolve('public/js')// ubicación de donde se guardará el archivo
    }
}