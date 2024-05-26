'use client';
import { useState } from 'react';

export default function UserConnections() {
    const [username, setUsername] = useState('');
    const [connections, setConnections] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/user-connections?username=${username}`);
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
                <div className="my-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username:
                    </label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Get Connections
                </button>

                
            </form>
            <ul className="mt-5">
                {connections.map((connection, index) => (
                    <li key={index} className="text-gray-900 dark:text-white">
                        {connection}
                    </li>
                ))}
            </ul>
        </div>
    );
    
}
