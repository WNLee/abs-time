import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
    }, 
    {
      file: 'lib/index.es.js',
      format: 'es',
    },
    {
      name: 'abstime',
      file: 'lib/index.umd.js',
      format: 'umd',
    }
  ],
  plugins: [
    resolve({
      extensions: [".js", ".ts"]
    }),
    babel({
      extensions: [".js", ".ts"],
      runtimeHelpers: true,
      exclude: ["node_modules/**"]
    }),
  ],
  external: [
    'date-fns',
  ],
}
