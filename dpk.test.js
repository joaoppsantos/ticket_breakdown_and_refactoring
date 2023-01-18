const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("should return 0 when event is not provided", () => {
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("should return partitionKey when provided in event object", () => {
    expect(
      deterministicPartitionKey({ partitionKey: "mockPartitionKey" })
    ).toEqual("mockPartitionKey");
  });

  it("should return hash of event object when partitionKey not provided", () => {
    const event = { some: "data" };
    const data = JSON.stringify(event);
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(data)
      .digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(expectedHash);
  });
});
