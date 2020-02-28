import { init, balanceOf, totalSupply, transfer, transferFrom } from "../main";
import { VM } from "wasm-mock-vm";

const alice: string = "alice";
const bob: string = "bob";

function logs(): string[] {
  return VM.outcome().logs;
}

describe("Token Contract should be", () => {
  it("created with full amount", () => {
    init(alice);
    expect(logs()).toContainEqual("initialOwner: " + alice);
    expect(balanceOf(alice)).toBe(U64.parseInt(totalSupply()), "starting balance should be " + totalSupply());
  });

  throws("A non existent account cannot transfer tokens", () => {
    transferFrom(bob, alice, 1);
  });
});
