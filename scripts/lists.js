import { repl } from "./repl.js";

(async () => {
  try {
    const command = `registry.lists`;
    // console.log(command);
    const response = await repl(command);
    console.log(response);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
