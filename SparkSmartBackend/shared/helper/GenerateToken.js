// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

/**
 * Generate a JWT token for a given user ID.
 * @param {string} userId - The user ID to include in the token payload.
 * @returns {string} - The generated JWT token.
 */
const generateToken = (userId) => {
  // Create a JWT token with the user ID in the payload
  const token = jwt.sign(
    {
      uuid: userId, // Include the user ID in the token payload
    },
    'qwertyuiopasdfghjklzxcvbnm', // Use the provided salt for signing
    { expiresIn: 3600888 } // Set the token expiration time
  );

  return token; // Return the generated token
};

module.exports = generateToken;
