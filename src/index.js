const addListener = (bucket, listener) => {
  bucket.push(listener)
  return {
    done: () => {
      const index = bucket.indexOf(listener)
      bucket.splice(index, 1)
    }
  }
}

const recallListeners = (bucket, value) => {
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) {
      bucket[i](value)
    }
  }
}

module.exports = () => {
  const bucket = []
  return (prop) => {
    if (typeof prop === 'function') {
      return addListener(bucket, prop)
    }
    recallListeners(bucket, prop)
  }
}
