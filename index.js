'use strict'

module.exports = {
  extract: require('./extract'),
  manifest: require('./manifest'),
  packument: require('./packument'),
  prefetch: require('./prefetch'),
  clearMemoized: require('./lib/fetch').clearMemoized
}
