import fs from 'fs';

function readFile(file) {
  try {
    return fs.readFileSync(file, "utf-8");
  } catch (e) {
    return e;
  }
}

export { readFile };
