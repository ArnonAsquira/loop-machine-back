import fs from "fs";
import path from "path";
import { IParsedAudioFileObj } from "../types/audioTypes";

const encodeAllMp3Files = (): IParsedAudioFileObj[] | never => {
  const encodedAudioFiles: IParsedAudioFileObj[] = [];
  try {
    const loopFilePath = path.resolve("./back/assets/Loop-files");
    const loopFilesDirContents = fs
      .readdirSync(loopFilePath)
      .toString()
      .split(",");
    for (const fileName of loopFilesDirContents) {
      const filePath = `${loopFilePath}/${fileName}`;
      const fileBuffer = fs.readFileSync(filePath);
      encodedAudioFiles.push({ fileName, content: encodeMp3File(fileBuffer) });
    }
  } catch (err) {
    throw err;
  }
  return encodedAudioFiles;
};

const encodeMp3File = (fileBuffer: Buffer): string => {
  return Buffer.from(fileBuffer).toString("base64");
};

export { encodeAllMp3Files };
