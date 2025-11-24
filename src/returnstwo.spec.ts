import { describe, it, expect } from "vitest";
import { returnstwo } from "./returnstwo";

describe("returnstwo", () => {
	it("returns 2", () => {
		expect(returnstwo()).toBe(2);
	});
});
