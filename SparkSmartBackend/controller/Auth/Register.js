const pool = require('../../shared/db/connection');

const {generateSha256Password} = require("../../shared/helper/GenerateSha256Password");
const {generateUUID} =require("../../shared/helper/GenerateUuid");

const Role = {
      ADMIN: "ADMIN",
      USER: "USER",
    };

    
    const userRegister = (req, res) => {
      const { username, phoneno, role, email, password } = req.body;
    
      // Generate UUID
      const id = generateUUID();
    
      // Validate request body
      if (!username || !phoneno || !role || !email || !password) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }
    
      // Validate role
      if (!Object.values(Role).includes(role)) {
        res.status(400).json({ error: "Invalid role" });
        return;
      }
    
      // Generate SHA-256 hash of the password
      const updatePassword = generateSha256Password(password);
    
      // Save user to the database
      const query =
        "INSERT INTO user (id,username, mobileNumber, role, email,password) VALUES (?, ?, ?, ?, ?, ?)";
      pool.query(
        query,
        [id, username, phoneno, role, email, updatePassword],
        (error, results) => {
          if (error) {
            console.error("Error registering user:", error.stack);
            res.status(500).json({ error: "Failed to register user" });
            return;
          }
          res.status(201).json({
            message: "User registered successfully"
          });
        }
      );
      
    };
    
    module.exports = userRegister;
    