import UserConnections from '../../components/UserConnections';
import Link from "next/link";

export default function UserConnectionsPage() {
    return (
        <div className="max-w-sm mx-auto">
            <Link
            href={`/`}
            className="top-4 left-4 mt-28 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Home
          </Link>
            <h1 className="text-xl font-bold mb-4">User Connections</h1>

            <p className="mb-5 text-gray-700 dark:text-gray-300">
                Which user's connections would you like to view?
            </p>
            
            <UserConnections />
        </div>
    );
}
