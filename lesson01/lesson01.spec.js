import * as assert from "assert"
import {exampleFunction} from "./lesson01.js"

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      exampleFunction();
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});