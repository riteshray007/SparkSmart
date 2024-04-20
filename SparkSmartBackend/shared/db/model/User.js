// Enum Role
const Role = {
    ADMIN: 'ADMIN',
    USER: 'USER'
  };
  
  // Interface Admin
  const Admin = {
    id: '',
    username: '',
    mobileNumber: '',
    role: Role.ADMIN, // Assigning the role directly as 'ADMIN' for illustration
    email: '',
    password:''
  };
  
  module.exports = {
    Role,
    Admin
  };