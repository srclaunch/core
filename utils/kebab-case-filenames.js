import glob from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

export const kebabCaseFileNames = ({ path: directory }) => {
  const files = glob.sync(`${directory}/**/*.{ts,js,tsx,jsx}`, {
    cwd: '.',
    ignore: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/docs/**',
    ],
  });

  for (const file of files) {
    const filePath = path.resolve(file);
    const letters = file.split('');

    const newFileName = letters
      .map((letter, index) => {
        const lastletter = letters[index - 1];
        if (
          letter === letter.toUpperCase() &&
          letter !== letter.toLowerCase() &&
          index !== 0 &&
          lastletter !== '/'
        ) {
          return `-${letter.toLowerCase()}`;
        }

        return letter.toLowerCase();
      })
      .join('');

    const newFilePath = path.join(path.resolve(), newFileName);

    console.log(`Renaming ${filePath} to ${newFilePath}`);
    fs.renameSync(filePath, newFilePath);
  }
};

export default kebabCaseFileNames({ path: process.argv[3] });
