type OutputType = string | number | Array<string> | Array<number>;

export class Base {
  protected input: string;
  protected N: number;

  protected output: OutputType;

  constructor() {}

  public _input(input: string): Base {
    this.input = input;
    this.N = input.length - 1;
    return this;
  }

  public get _output(): OutputType {
    return this.output;
  }

  public process() {
    return this;
  }

  public log() {
    console.log(`Input::${this.input} & Output::${this.output}`);
  }
}

const base: Base = new Base();
base._input('').process().log();

export class Person extends Base {
  public name;
  public designation;

  constructor(name, designation) {
    super();
    this.name = name;
    this.designation = designation;
  }

  public introduce() {
    return `Hi, I am ${this.name}. I am a ${this.designation}.`;
  }
}
