// const NpmTest = require('npm-test-lsx')
import NpmTest from 'npm-test-lsx'
let test = new NpmTest();
test.fun1();
test.fun2().then(res => {
    console.log(res);
});
