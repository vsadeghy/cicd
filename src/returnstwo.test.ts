import assert from "node:assert";
import { describe, it } from "node:test";
import { returnstwo } from "./returnstwo";

describe("returnstwo", () => {
	it("returns 2", () => {
		assert.strictEqual(returnstwo(), 2);
	});
});
