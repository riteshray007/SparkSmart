import axios from "axios";


export const LoginAPI = async (payload) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, payload);
        return response.data; // Assuming the response contains JSON data
      } catch (error) {
        // Handle errors
        console.error("Error user login:", error);
        throw error; // Rethrow the error to be handled by the caller
      }
    };

    export const RegisterAPI = async (payload) => {
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, payload);
        return response.data; // Assuming the response contains JSON data
      } catch (error) {
        // Handle errors
        toast.error("Error creating user:", error);
        throw error; // Rethrow the error to be handled by the caller
      }
    };
