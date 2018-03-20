module.exports = function isObject (obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}
