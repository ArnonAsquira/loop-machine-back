import express from "express";
import { encodeAllMp3Files } from "../utils/audioFileUtils";
import path from "path";
import fs from "fs";
const router = express();

router.get("/", (req, res) => {
  try {
    const allAudioFiles = encodeAllMp3Files();
    return res.send(allAudioFiles);
  } catch (err) {
    return res.status(500).send("could not retrieveAudioFiles");
  }
});

export default router;
