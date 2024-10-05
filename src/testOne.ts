export default function testOne(input: Array<number>) {
  const hashSet = new Set();
  const data: Array<Array<number>> = [];
  let innerData: Array<number> = [];
  let setOf = 2;
  let countOf = 0;
  // for (const [i, e] of input) {
  for (let i = 0; i < input.length; i++) {
    console.log(i, input[i]);
    if (hashSet.has(input[i])) continue;
    countOf++;
    //console.log({ countOf, setOf, i, innerData });
    if (countOf <= setOf) {
      // 1,2 <=2
      innerData.push(input[i]);
    } else {
      setOf = setOf === 2 ? 3 : 2;
      countOf = 1;
      data.push(innerData);
      innerData = [input[i]];
    }
    if (i === input.length - 1) data.push(innerData);
    hashSet.add(input[i]);
  }
  return data;
}
