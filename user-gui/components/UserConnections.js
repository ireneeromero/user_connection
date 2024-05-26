'use client';
import { useState } from 'react';

export default function UserConnections() {
    const [user_id, setUserId] = useState('');
    const [connections, setConnections] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/user-connection/${user_id}`);
        if (res.ok) {
            const data = await res.json();
            setConnections(data.connections);
        } else {
            alert('Failed to fetch connections');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                    <input
                        type="text"
                        value={user_id}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </label>
                <button type="submit">Get Connections</button>
            </form>
            <ul>
                {connections.map((connection) => (
                    <li key={connection.id}>
                        {connection.name} (ID: {connection.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}
