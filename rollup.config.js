import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/selector-generator.js',
    output: {
        file: 'dist.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
    ],
}