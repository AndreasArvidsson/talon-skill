import { repl } from "./repl.js";

const command = process.argv[2];

if (!command) {
  console.error('Usage: node sim.js "<command>"');
  process.exit(1);
}

(async () => {
  try {
    const fullCommand = `sim("${command}")`;
    // console.log(fullCommand);
    const response = await repl(fullCommand);
    console.log(response);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
