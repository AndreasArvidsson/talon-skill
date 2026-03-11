import os from "node:os";
import path from "node:path";

export function getTalonHome() {
  if (os.platform() === "win32") {
    const appData =
      process.env.APPDATA || path.join(os.homedir(), "AppData", "Roaming");
    return path.join(appData, "talon");
  }
  return path.join(os.homedir(), ".talon");
}
