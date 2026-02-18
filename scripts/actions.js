import { repl } from "./repl.js";

(async () => {
  try {
    const command = `actions.list()`;
    // console.log(command);
    const response = await repl(command);
    console.log(response);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
