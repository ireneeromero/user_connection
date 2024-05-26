import Link from 'next/link';

export default function Home() {
    return (
        <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h1 className="text-2xl font-extrabold mb-4 text-center text-gray-900 dark:text-white">User Connection App</h1>
            <p className="mb-6 text-md text-gray-700 dark:text-gray-300 text-center">
                We have a number of users that we need to keep track of. We also wish to keep track
                of the connections between users.
            </p>
            <ul className="space-y-4">
                <li>
                    <Link href="/add-user" className="block text-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-3 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                        Add User
                    </Link>
                </li>
                <li>
                    <Link href="/add-connection" className="block text-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-3 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                        Add Connection
                    </Link>
                </li>
                <li>
                    <Link href="/user-connections" className="block text-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-3 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                        View User Connections
                    </Link>
                </li>
                <li>
                    <Link href="/stats" className="block text-center text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-3 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                        View Stats
                    </Link>
                </li>
            </ul>
        </div>
    );
}
