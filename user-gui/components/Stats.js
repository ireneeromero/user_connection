'use client';
import { useEffect, useState } from 'react';

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
        <div>
            <h1>Stats</h1>
            <p>Total Users: {stats.total_users}</p>
            <p>Total Connections: {stats.total_connections}</p>
        </div>
    );
}
