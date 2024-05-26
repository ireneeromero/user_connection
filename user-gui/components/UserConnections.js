'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function UserConnections() {
    const [username, setUsername] = useState('');
    const [connections, setConnections] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/get-users');
                const data = await res.json();
                setUsers(data || []);
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
        setError('');
        const res = await fetch(`/api/user-connection/${username}`);
        if (res.ok) {
            const data = await res.json();
            if (data.connections.length === 0) {
                setError('No connections found for the selected user.');
            } else {
                setConnections(data.connections);
            }
        } else {
            alert('Failed to fetch connections');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username:
                    </label>
                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    >
                        <option value="">Select a user</option>
                        {users.map((user, index) => (
                            <option key={index} value={user}>{user}</option>
                        ))}
                    </select>
                </div>
                <div className='flex justify-between'>
                    <button
                        type="submit"
                        className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Get Connections
                    </button>

                    <Link
                        href={`/`}
                        className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Home
                    </Link>
                </div>
            </form>

            {error && <p className="mt-5 text-red-500">{error}</p>}

            {!error && connections.length > 0 && (
                <ul className="mt-5">
                    {connections.map((connection, index) => (
                        <li key={index} className="text-gray-900 dark:text-white">
                            {connection}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
