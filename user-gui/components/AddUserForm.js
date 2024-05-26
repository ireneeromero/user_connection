'use client';
import { useState } from 'react';

export default function AddUserForm() {
    const [name, setName] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("fffff", name)

        const res = await fetch('/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (res.ok) {
            alert('User added successfully');
        } else {
            alert('Failed to add user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">Add User</button>
        </form>
    );
}
