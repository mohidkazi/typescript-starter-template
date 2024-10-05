// h[ello](!)

export default function testTwo(str: string): string {
  console.log('input:', str);
  /**
   * ~remove values apart from brackets~
   * ~create a stack and a counter~
   * ~if no bracket, return 0~
   * ~when starting bracket is found, increment counter~
   * ~when a pair is found, remove pair entry from stack~
   * ~when a braket pair mismatch happen, return 0~
   * is extra bracket is present in stack, return 0
   */

  if (!str) return '0';
  // const stringList: string[] = str.replace(/[a-zA-Z0-9 ]/i, '').split('');
  const stringList: string[] = str.split('').filter((s) => ['(', ')', '[', ']'].includes(s));
  // console.log('stringList:', stringList, stringList.length);
  if (!stringList.length) return '0';

  const stringListStack: string[] = [];
  let stringListCounter: number = 0;

  for (let i = 0; i < stringList.length; i++) {
    if (['(', '['].includes(stringList[i])) {
      stringListStack.push(stringList[i]);
      stringListCounter++;
    }
    console.log({ i, stringListCounter, stringListStack, value: stringList[i] });

    if ([')', ']'].includes(stringList[i])) {
      if (
        (stringListStack[stringListStack.length - 1] === '(' && stringList[i] === ')') ||
        (stringListStack[stringListStack.length - 1] === '[' && stringList[i] === ']')
      ) {
        stringListStack.pop();
      } else if (
        (stringListStack[stringListStack.length - 1] === '(' && stringList[i] === ']') ||
        (stringListStack[stringListStack.length - 1] === '[' && stringList[i] === ')')
      ) {
        return '0';
      }
    }
  }

  if (stringListStack.length) return '0';

  return `1 ${stringListCounter}`;
}

export function SearchingChallenge(str) {
  // check if empty
  const mapper: {
    ['(']: {
      count: number;
    };
    ['[']: {
      count: number;
    };
    pointer: string[];
    match: boolean;
    count: number;
  } = {
    ['(']: {
      count: 0,
    },
    ['[']: {
      count: 0,
    },
    pointer: [], // stack
    match: false,
    count: 0,
  };

  const strList: string[] = str.replace(/[a-zA-Z0-9 ]/g, '').split('');
  const isBrackets = strList.some((s) => ['(', '['].includes(s));
  console.log(1, isBrackets);
  if (!isBrackets) return 1;
  console.log(2, strList, strList.length);

  for (let i = 0; i < strList.length; i++) {
    if (mapper.pointer.length && mapper.pointer[mapper.pointer.length - 1] === '(' && strList[i] === ']') return '0';
    if (mapper.pointer.length && mapper.pointer[mapper.pointer.length - 1] === '[' && strList[i] === ')') return '0';

    if (strList[i] === '(') {
      mapper['('].count++;
      mapper.count++;
    }
    if (strList[i] === ')') mapper['('].count--;
    if (strList[i] === '[') {
      mapper['['].count++;
      mapper.count++;
    }
    if (strList[i] === ']') mapper['['].count--;

    if (['(', '['].includes(strList[i])) {
      mapper.pointer.push(strList[i]);
    } else {
      mapper.pointer.pop();
    }
    console.log(i, { a: mapper['('].count, b: mapper['['].count, c: mapper.count, p: mapper.pointer });
  }

  if (mapper['('].count !== 0 && mapper['['].count !== 0) return '0';
  return `1 ${mapper.count}`;
}

// keep this function call here
// console.log(SearchingChallenge(readline()));
