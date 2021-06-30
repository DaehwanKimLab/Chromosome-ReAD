const chai = require("chai");
chai.use(require("chai-as-promised"));
const assert = chai.assert;
const mock = require('mock-fs');

const constVersion = require("../src/const-version");

mock({
  prj: {
    "good.json": `{"version": "1.2.5",  "name" : "abc"}`,
    "withoutversion.json": `{"name" : "abc"}`,
    "badjson.json": `{"version": "1.2.5"`,

    "version_exist.js": "etcetc"
  }
});

describe("read phase", () => {
  it("should read version from package.json", () => {
    return assert.becomes(constVersion.readVersion("prj/good.json"), "1.2.5");
  });

  it("should reject not found file", () => {
    return assert.isRejected(constVersion.readVersion("prj/notfound.json"), "file not found");
  });

  it("should reject not valid json file", () => {
    return assert.isRejected(constVersion.readVersion("prj/badjson.json"), "file doesn't contain valid json");
  });

  it("should reject json file without version", () => {
    return assert.isRejected(constVersion.readVersion("prj/withoutversion.json"), "file doesn't contain version");
  });
});

describe("write phase", () => {
  it("should save version file", () => {
    return assert.isFulfilled(constVersion.writeVersion("prj/version.js", "1.2.3"));
  });

  it("should save version file", () => {
    return assert.isFulfilled(constVersion.writeVersion("prj/version_exist.js", "1.2.3"));
  })
});

describe("const version", () => {
  it("should read package.json and save file with version", () => {
    return assert.isFulfilled(constVersion.default("prj/good.json", "prj/ver.js"));
  });
});
