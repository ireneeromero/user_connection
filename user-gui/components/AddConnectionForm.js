'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function AddConnectionForm() {
    const [user_username, setUserUsername] = useState('');
    const [connection_with_username, setConnectionWithUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/get-users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

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

    if (loading) {
        return <p>Loading...</p>;
    }
    
    const filteredUsersForFirstSelect = Array.isArray(users) ? users.filter(user => user !== connection_with_username) : [];
    const filteredUsersForSecondSelect = Array.isArray(users) ? users.filter(user => user !== user_username) : [];

    return (
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First username</label>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={user_username}
                    onChange={(e) => setUserUsername(e.target.value)}
                    required
                >
                    <option value="">Select a user</option>
                    {filteredUsersForFirstSelect.map((user, index) => (
                        <option key={index} value={user}>{user}</option>
                    ))}
                </select>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Connect with username</label>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={connection_with_username}
                    onChange={(e) => setConnectionWithUsername(e.target.value)}
                    required
                >
                    <option value="">Select a user</option>
                    {filteredUsersForSecondSelect.map((user, index) => (
                        <option key={index} value={user}>{user}</option>
                    ))}
                </select>
            </div>
            <div className='flex justify-between'>
                <button type="submit" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Connection
                </button>
                <Link
                    href={`/`}
                    className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Home
                </Link>
            </div>
        </form>
    );
}
