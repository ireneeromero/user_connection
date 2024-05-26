'use client';
import { useState } from 'react';
import Link from "next/link";

export default function AddUserForm() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, name }),
        });
        if (res.ok) {
            alert('User added successfully');
        } else {
            alert('Failed to add user');
        }
    };

    return (
        

        <form  onSubmit={handleSubmit}>
        <div className="my-5">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
            type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
        </div>

        <div className='flex justify-between'>
        
            <button type="submit" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add User</button>
            
            <Link
                href={`/`}
                className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
            Home
            </Link>
        </div>
        </form>


    );
}
