const crypto = require('crypto');

function generateHash({ type = 'md5', data }) {
  return crypto.createHash(type).update(data).digest('hex');
}

function generateRandomHash({ type = 'md5', args = [] }) {
  const data = args.join('') + Date.now();
  return generateHash({ type, data });
}

module.exports = { generateHash, generateRandomHash };
