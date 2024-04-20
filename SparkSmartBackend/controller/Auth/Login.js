const pool = require("../../shared/db/connection");
const generateToken = require("../../shared/helper/GenerateToken");
const { generateUUID } = require("../../shared/helper/GenerateUuid");
const {
  generateSha256Password,
  generateSha256Hash,
} = require("../../shared/helper/GenerateSha256Password");


const userLogin = (req, res) => {
      const { email, password } = req.body;
    
      // Validate request body
      if (!email || !password) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }
    
      // Hash the password
      const hashedPassword = generateSha256Password(password);
    
    
      // Query to select user from the database
      const query = "SELECT * FROM user WHERE email = ? AND password = ?";
    
      // Execute the query
      pool.query(query, [email, hashedPassword], (error, results, fields) => {
        if (error) {
          // If error occurs during database query, send 500 error response
          res.status(500).json({ error: "Failed to login" });
          return;
        }
    
        if (results.length === 0) {
          // If no user found with provided credentials, send 401 unauthorized response
          res.status(401).json({ error: "Invalid email or password" });
          return;
        }
    
        // Extract user object from the results
        const user = results[0];
    
        // Generate Token
        const token = generateToken(user.id);
    
        // Generate UUID
        const id = generateUUID();
    
        // Save session data to the database
        const userLogsQuery =
          "INSERT INTO UserLogs (logId, action, device, result, tokenHash, userId) VALUES (?, ?, ?, ?, ?, ?)";
    
        pool.query(
          userLogsQuery,
          [id, "LOGIN", "WEB", "Successful", generateSha256Hash("Bearer " + token), user.id],
          (error, results) => {
            if (error) {
              // If error occurs while saving session data, send 500 error response
              console.error("Error saving session data:", error.stack);
              res.status(500).json({ error: "Failed to save session data" });
              return;
            }
    
            // If session data saved successfully, send 201 created response
            res.status(201).json({
              message: "User logged in successfully",
              token: token,
              user: user,
            });
          }
        );
      });
    };
    
    module.exports = userLogin;
    
