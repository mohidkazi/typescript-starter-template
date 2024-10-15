export class Base {
  private input: string;
  private N: number;

  private output: string | number;

  constructor() {}

  public set _input(input: string) {
    this.input = input;
    this.N = input.length - 1;
  }

  public get _output(): string | number {
    return this.output;
  }

  public process() {
    for (let index = 0; index <= this.N; index++) {
      console.log(this.input[index]);
    }
  }

  public log() {
    console.log(this.output);
  }
}

const base: Base = new Base();
base._input = '';
base.process();
base.log();

export class Person {
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
