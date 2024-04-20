const { createHash } = require("crypto");

/**
 * Function to generate a salted SHA-256 hash of the password.
 * @param {string} password - The password to be hashed.
 * @param {string} [salt] - Optional salt value for hashing.
 * @returns {string} - Salted SHA-256 hash of the password.
 */

const generateSha256Password = (key, salt) => {
  const secret = salt || "4ac1af3e9cfedb03cf34e3ccb464a8a93d1b2135";
  return createHash("sha256")
    .update(key + secret)
    .digest("hex");
};

const generateSha256Hash = (key) => {
  return createHash("sha256").update(key).digest("hex");
};



module.exports = {
  generateSha256Password,
  generateSha256Hash,
};
