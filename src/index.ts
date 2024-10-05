// import Person from './Person';
import testTwo from './testTwo';
// import testOne from './testOne';

// const jim = new Person('Mohid', 'Developer');
// console.log(jim.introduce());
// console.log(jim.name);

/**
 * test one -
 * for input [1, 2, 1, 4, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 * output should be in set of 2 & 3 where the values should not repeat
 * output - [
 * [1, 2],
 * [4, 5, 3],
 * [6, 7],
 * [8, 9, 10],
 * [11]
 * ]
 */

// console.log(testOne([1, 2, 1, 4, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

/**
 * https://codeinterview.io/SDEOUMXQTF
 * 1. For input "h[ello](!)" the output was incorrect. The correct output is 1 2
 * 2. For input "one(bracket)" the output was incorrect. The correct output is 1 1
 * 3. For input "coder(b)(y)(t)([e))" the output was incorrect. The correct output is 0
 * 4. For input "()code[rb]yte() yes()[ss][[" the output was incorrect. The correct output is 0
 * 5. For input "dogs and cats([(1)])" the output was incorrect. The correct output is 1 3
 * 6. For input "01()01()01()[10]" the output was incorrect. The correct output is 1 4
 * 7. For input "the co[l][]or re(d))()(()" the output was incorrect. The correct output is 0
 * 8. For input "le[tter(s) gal](o)(r)((e])" the output was incorrect. The correct output is 0
 * 9. For input "thr[e](e) let(t)ers" the output was incorrect. The correct output is 1 3
 * 10. For input "twice thri(c)(e)()()[[[[dash]]]]" the output was incorrect. The correct output is 1 8
 */

// console.log(testTwo('h[ello](!)'), 'output: 1 2');
// console.log(testTwo('one(bracket)'), 'output: 1 1');
// console.log(testTwo('coder(b)(y)(t)([e))'), 'output: 0');
// console.log(testTwo('()code[rb]yte() yes()[ss][['), 'output: 0');
console.log(testTwo('dogs and cats([(1)])'), 'output: 1 3');
// console.log(testTwo('01()01()01()[10]'), 'output: 1 4');
// console.log(testTwo('he co[l][]or re(d))()(()'), 'output: 0');

//317 vashi plaza
