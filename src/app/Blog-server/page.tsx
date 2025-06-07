import React from 'react'

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};
const UserServer = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <div>
            {users.map((user: User) => (
                <li
                    key={user.id}
                    className="p-4 m-2 bg-white shadow-md rounded-lg text-gray-700"
                >
                    {user.name} ({user.email})
                </li>
            ))}
        </div>
    )
}

export default UserServer;