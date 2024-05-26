'use client';

import { useState } from 'react';

export default function AddConnectionForm() {
    const [user_username, setUserUsername] = useState('');
    const [connection_with_username, setConnectionWithUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/add-connection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_username, connection_with_username }),
        });
        if (res.ok) {
            alert('Connection added successfully');
        } else {
            alert('Failed to add connection');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First username:
                <input
                    type="text"
                    value={user_username}
                    onChange={(e) => setUserUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                Connect with username:
                <input
                    type="text"
                    value={connection_with_username}
                    onChange={(e) => setConnectionWithUsername(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Connection</button>
        </form>
    );
}
