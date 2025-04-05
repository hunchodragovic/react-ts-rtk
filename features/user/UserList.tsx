import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../../features/user/userSlice"; // Importing actions
import { useEffect } from "react";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  // Fetch users when component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Add a user manually (for demonstration)
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(), // Using a timestamp as a simple unique ID
      name: `User ${Date.now()}`, // Creating a random name
    };
    dispatch(addUser(newUser)); // Dispatching the addUser action
  };

  // Remove a user by ID
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id)); // Dispatching the removeUser action
  };

  return (
    <div>
      <h1>User List</h1>

      {/* Display loading or error messages */}
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}

      <div>
        <h2>List of Users:</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}{" "}
                <button onClick={() => handleRemoveUser(user.id)}>
                  Remove
                </button>{" "}
                {/* Remove button */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>

      {/* Add User button */}
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserList;
