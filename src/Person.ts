export default class Person {
  public name;
  public designation;

  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }

  public introduce() {
    return `Hi, I am ${this.name}. I am a ${this.designation}.`;
  }
}
