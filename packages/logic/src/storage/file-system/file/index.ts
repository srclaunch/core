import { access, readFile as fsReadFile, remove, writeFile as fsWriteFile } from 'fs-extra';

export const deleteFile = async (file: string): Promise<void> => {
  if (!file) {
    throw new Error('File must be provided');
  }

  if (file === '/') {
    throw new Error('Cannot delete root directory');
  }

  try {
    await remove(file);
  } catch (err) {
    throw new Error(`Could not delete file: ${file}`);
  }
};

export async function readFile(filePath: string) {
  if (!filePath) {
    throw new Error('File path must be provided');
  }

  try {
    return (await fsReadFile(filePath)).toString();
  } catch (err) {
    throw new Error(`Could not read file: ${filePath}`);
  }
}

export async function writeFile(filePath: string, data: string) {
  if (!filePath) {
    throw new Error('File path must be provided');
  }

  try {
    return await fsWriteFile(filePath, data);
  } catch (err) {
    throw new Error(`Could not write file: ${filePath}`);
  }
}


export const fileExists = async (path: string): Promise<boolean> => {
  try {
    await access(path);
    return true;
  } catch (err) {
    return false;
  }
};
