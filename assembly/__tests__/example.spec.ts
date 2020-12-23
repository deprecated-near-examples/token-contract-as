import { init, balanceOf, totalSupply, transferFrom } from "..";
import { VM } from "near-sdk-as";

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
