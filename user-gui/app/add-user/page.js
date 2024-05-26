import AddUserForm from '../../components/AddUserForm';


export default function AddUser() {
    return (
        <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h1 className="text-2xl font-extrabold mb-4 text-center text-gray-900 dark:text-white">Add New User</h1>
            <p className="mb-6 text-md text-gray-700 dark:text-gray-300 text-center">
                Add a new user by entering their details below.
            </p>
            <AddUserForm />
        </div>
    );
}