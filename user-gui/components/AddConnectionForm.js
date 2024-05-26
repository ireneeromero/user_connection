'use client';
import { useState } from 'react';

export default function AddConnectionForm() {
    const [user_id, setUserId] = useState('');
    const [connection_with_id, setConnectionWithId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/add-connection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id, connection_with_id }),
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
                User ID:
                <input
                    type="text"
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </label>
            <label>
                Connection with User ID:
                <input
                    type="text"
                    value={connection_with_id}
                    onChange={(e) => setConnectionWithId(e.target.value)}
                />
            </label>
            <button type="submit">Add Connection</button>
        </form>
    );
}
