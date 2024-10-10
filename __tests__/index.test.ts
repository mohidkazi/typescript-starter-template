import Person from '../src/Person';

describe('Person name: Jim, gender: Male', () => {
  const name = 'Jim';
  const designation = 'Developer';
  const person = new Person(name, designation);

  test(`Test name: ${name}`, () => {
    expect(person.name).toBe(name);
  });

  test(`Test Designation: ${designation}`, () => {
    expect(person.designation).toBe(designation);
  });

  test(`introduction`, () => {
    expect(person.introduce()).toBe(`Hi, I am ${name}. I am ${designation}.`);
  });
});

describe('Person name: Jill, gender: Female', () => {
  const name = 'Jill';
  const designation = 'Developer';
  const person = new Person(name, designation);

  test(`Test name: ${name}`, () => {
    expect(person.name).toBe(name);
  });

  test(`Test Designation: ${designation}`, () => {
    expect(person.designation).toBe(designation);
  });

  test(`introduction`, () => {
    expect(person.introduce()).toBe(`Hi, I am ${name}. I am ${designation}.`);
  });
});
