import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {users.map(({ id, name }) => (
                <div key={id}>
                    {name}
                </div>
            ))}
        </div>
    );
};