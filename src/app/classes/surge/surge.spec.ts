import { Ideal } from "../ideal/ideal";
import { Surge } from "./surge";

describe('Surge', () => {
  it('should create an instance', () => {
    expect(new Surge(0, '', '', Ideal.NO_IDEAL)).toBeTruthy();
  });
});
