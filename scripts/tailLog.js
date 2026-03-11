import os from "node:os";
import path from "node:path";
import childProcess from "node:child_process";
import { getTalonHome } from "./utils.js";

const TAIL_LINE_COUNT = 100;

function log() {
  const logPath = path.join(getTalonHome(), "talon.log");

  return new Promise((resolve, reject) => {
    if (os.platform() === "win32") {
      childProcess.execFile(
        "powershell.exe",
        [
          "-NoProfile",
          "-Command",
          `Get-Content -Path '${escapePowerShellString(logPath)}' -Tail ${TAIL_LINE_COUNT}`,
        ],
        { encoding: "utf8" },
        handleResult(resolve, reject),
      );
    } else {
      childProcess.execFile(
        "tail",
        ["-n", String(TAIL_LINE_COUNT), logPath],
        { encoding: "utf8" },
        handleResult(resolve, reject),
      );
    }
  });
}

function handleResult(resolve, reject) {
  return (error, stdout, stderr) => {
    if (error) {
      reject(error.message);
      return;
    }

    if (stderr) {
      reject(stderr);
      return;
    }

    resolve(stdout);
  };
}

function escapePowerShellString(value) {
  return value.replaceAll("'", "''");
}

try {
  const response = await log();
  console.log(response);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
