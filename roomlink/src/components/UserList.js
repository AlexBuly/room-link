import React,{ useState, useEffect } from "react";
import axios from "axios";
 const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users');
                console.log(response.data)
                setUsers(response.data);
            } catch (error) {
                console.log('Error fetching users', error);
            }
        };
        fetchUsers();
    
 }, [])
 return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.userId}>{user.username}</li>
            ))}
        </ul>
    </div>
 )

};

export default UserList;