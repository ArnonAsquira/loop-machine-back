import request from "supertest";
import app from "../app";

describe("request to /audio endpoint", () => {
  test("should reply with status code 200", async () => {
    const response = await request(app).get("/audio");
    expect(response.statusCode).toBe(200);
  });
  test("should reply with an array of parsed audio files object", async () => {
    const parsedAudioFiles = await (await request(app).get("/audio")).body;
    expect(Array.isArray(parsedAudioFiles)).toBe(true);
    if (!Array.isArray(parsedAudioFiles)) return;
    const typedCheckedAudioFiles = parsedAudioFiles.filter(
      (fileObj) =>
        typeof fileObj.content === "string" &&
        typeof fileObj.fileName === "string"
    );
    expect(typedCheckedAudioFiles.length).toBe(parsedAudioFiles.length);
  });
});
