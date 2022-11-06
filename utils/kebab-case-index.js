import glob from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

export const kebabCaseIndexExports = ({ file }) => {
  // console.log('file', file);
  const filePath = path.resolve(file);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const newFileContents = fileContents
    .split('\n')
    .map(line => {
      if (line.includes("from '")) {
        const [, importPath] = line.match(/from '(.*)'/);
        const importPathParts = importPath.split(' ');
        const importPathLastPart = importPathParts[importPathParts.length - 1];
        const importPathLastPartKebabCase = importPathLastPart.split('');
        const newImportPathLastPart = importPathLastPartKebabCase.map(
          (letter, index) => {
            const lastLetter = importPathLastPartKebabCase[index - 1];

            if (
              letter === letter.toUpperCase() &&
              letter !== letter.toLowerCase() &&
              lastLetter !== '/'
            ) {
              return `-${letter.toLowerCase()}`;
            }

            return letter.toLowerCase();
          },
        );

        // console.log('newImportPathLastPart', newImportPathLastPart);

        const newImportPath = importPathParts
          .slice(0, -1)
          .concat(newImportPathLastPart)
          .join('');

        // console.log('newImportPath', newImportPath);
        return line.replace(importPath, newImportPath);
      }
      return line;
    })
    .join('\n');

  console.log(`Writing ${filePath}`);
  fs.writeFileSync(filePath, newFileContents);
};

export default kebabCaseIndexExports({ file: process.argv[3] });
