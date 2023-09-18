import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
    },
    {
      file: "dist/esm/index.js",
      format: "es",
    },
    {
      file: "dist/umd/index.js",
      format: "umd",
      name: "NpmTest",
    },
  ],

  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
