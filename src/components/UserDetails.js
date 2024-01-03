import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const UserDetails = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Fetch the currently logged-in user from storage or authentication context
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(storedUser);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center">User Details</h1>
      {loggedInUser && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "fit-content", backgroundColor: "#453334", color: "white", display: 'inline-block' }}>
            <h3>Name: {loggedInUser.name}</h3>
            <p>Email: {loggedInUser.email}</p>
            <p>Password:{loggedInUser.password}</p>
            {/* Add more user details if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
