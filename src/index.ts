import Person from './Person';

enum nameEnum {
  MOHID = 'Mohid',
}

const jim = new Person(nameEnum.MOHID, 'Developer');

console.log(jim.introduce());

console.log(jim.name);
