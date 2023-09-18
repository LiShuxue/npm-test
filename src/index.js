import { test } from "./a";
class NpmTest {
  a = 1;
  b = 2;

  fun1 = () => {
    let c = 3;
    const d = 4;
    const e = new Set([1, 1, 2]);
    console.log(c, d, e);
    test();
  };

  fun2 = async () => {
    const p = new Promise((resolve, reject) => {
      resolve("1");
    });

    const res = await p;
    return res;
  };
}

export default NpmTest;
