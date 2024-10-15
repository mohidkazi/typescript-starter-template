import * as readline from 'node:readline/promises';
import { stdin, stdout, exit } from 'node:process';
import ATMMachine from './Interview/ATMMachine';

const amount = 2700;
const amtMachine: ATMMachine = new ATMMachine(amount);

async function withdraw() {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const input = await rl.question('Please provide the amount you want => ');
  input.split('|').map((amount) => {
    amtMachine.amount = Number(amount);
    amtMachine.process();
  });
  // rl.write('Please collect your note\n');
  exit();
}

withdraw();
