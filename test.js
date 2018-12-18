var assert = require('assert')

describe('mocha-test:', function () {
  it('template-path should console a String.', function () {
    const home = require('user-home')
    assert(home.length > 0)
  })
})