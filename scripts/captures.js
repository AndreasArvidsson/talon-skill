import { repl } from "./repl.js";

(async () => {
  try {
    const command = `\
for c in registry.captures.values():
    for i in c:
        res={
            "name": i.path,
            "rule": i.rule.rule
        }
        if i.func.__doc__:
            res["doc"] = i.func.__doc__
        print(res)

`;
    // console.log(command);
    const response = await repl(command);
    console.log(response);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
