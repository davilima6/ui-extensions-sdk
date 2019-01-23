const spaceMethods = [
  'getContentType',
  'getEntry',
  'getAsset',

  'getPublishedEntries',
  'getPublishedAssets',
  'getContentTypes',
  'getEntries',
  'getAssets',

  'createContentType',
  'createEntry',
  'createAsset',

  'updateContentType',
  'updateEntry',
  'updateAsset',

  'deleteContentType',
  'deleteEntry',
  'deleteAsset',

  'publishEntry',
  'publishAsset',
  'unpublishEntry',
  'unpublishAsset',

  'archiveEntry',
  'archiveAsset',
  'unarchiveEntry',
  'unarchiveAsset',

  'processAsset'
]

module.exports = function createSpace (channel) {
  const space = {}

  spaceMethods.forEach((methodName) => {
    space[methodName] = function (...args) {
      return channel.call('callSpaceMethod', methodName, args)
    }
  })

  return space
}