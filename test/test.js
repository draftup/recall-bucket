/* eslint-env mocha */

const assert = require('assert')
let createBucket
if (process.env.TYPE === 'src') {
  createBucket = require('../src')
} else {
  createBucket = require('../build')
}

describe('create bucket', () => {
  it('should return function', () => {
    const type = typeof createBucket()
    assert.equal('function', type)
  })
})

describe('add listener', () => {
  it('should return { done } object', () => {
    const bucket = createBucket()
    const listener = bucket(() => {})
    const key = Object.keys(listener)[0]
    assert.equal(key, 'done')
  })
})

describe('pass value', () => {
  it('should return undefined', () => {
    const bucket = createBucket()
    assert.equal(typeof bucket(true), 'undefined')
  })
})
