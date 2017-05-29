const assert = require('assert')
const createBucket = require('../index')

describe('create bucket', function() {
  it('should return function', function() {
    const type = typeof createBucket()
    assert.equal('function', type)
  })
})

describe('add listener', function() {
  it('should return { done } object', function() {
    const bucket = createBucket()
    const listener = bucket(() => {})
    const key = Object.keys(listener)[0]
    assert.equal(key, 'done')
  })
})

describe('pass value', function() {
  it('should return undefined', function() {
    const bucket = createBucket()
    assert.equal(typeof bucket(true), 'undefined')
  })
})
