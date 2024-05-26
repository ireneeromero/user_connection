'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Stats() {
    const [stats, setStats] = useState({ total_users: 0, total_connections: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const res = await fetch('/api/stats');
            if (res.ok) {
                const data = await res.json();
                setStats(data);
            } else {
                alert('Failed to fetch stats');
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h1 className="text-2xl font-extrabold mb-4 text-center text-gray-900 dark:text-white">Application Statistics</h1>
            <div className="text-center text-md text-gray-700 dark:text-gray-300">
                <p className="mb-2">Total Users: <span className="font-bold text-gray-900 dark:text-white">{stats.total_users}</span></p>
                <p>Total Connections: <span className="font-bold text-gray-900 dark:text-white">{stats.total_connections}</span></p>
            </div>

            <div className='flex justify-center'>
                
                <Link
                    href={`/`}
                    className="text-white mt-8 bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}
