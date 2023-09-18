import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "umd", // 输出格式
      name: "NpmTest",
    },
  ],

  plugins: [
    commonjs(),
    resolve(),
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
