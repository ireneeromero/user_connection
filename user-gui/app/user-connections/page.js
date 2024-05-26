import UserConnections from '../../components/UserConnections';


export default function UserConnectionsPage() {
    return (
        <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            
         
            <h1 className="text-xl font-bold mb-4">User Connections</h1>

            <p className="mb-5 text-gray-700 dark:text-gray-300">
                Which user&apos;s connections would you like to view?
            </p>
            
            <UserConnections />
        </div>
    );
}
