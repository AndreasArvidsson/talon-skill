import os from "node:os";
import path from "node:path";
import childProcess from "node:child_process";

export function repl(command) {
  return new Promise((resolve, reject) => {
    const repl = `"${getReplPath()}"`;

    const process = childProcess.exec(repl, (error, stdout, stderr) => {
      if (error) {
        reject(`exec error: ${error}`);
      } else if (stderr) {
        reject(`stderr: ${stderr}`);
      } else {
        const res = stdout.replace(/^Talon REPL \| .*?\r?\n/, "");
        resolve(res);
      }
    });

    if (!process.stdin) {
      reject("stdin is null");
      return;
    }

    process.stdin.end(command);
  });
}

function getReplPath() {
  if (os.platform() === "win32") {
    const appData =
      process.env.APPDATA ?? path.join(os.homedir(), "AppData", "Roaming");
    return path.join(appData, "talon\\venv\\3.13\\Scripts\\repl.bat");
  }
  return path.join(os.homedir(), ".talon/bin/repl");
}
