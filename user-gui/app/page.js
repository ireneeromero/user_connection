import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>User Connection App</h1>
            <ul>
                <li>
                    <Link href="/add-user">
                        Add User
                    </Link>
                </li>
                <li>
                    <Link href="/add-connection">
                        Add Connection
                    </Link>
                </li>
                <li>
                    <Link href="/user-connections">
                        View User Connections
                    </Link>
                </li>
                <li>
                    <Link href="/stats">
                        View Stats
                    </Link>
                </li>
                
            </ul>
        </div>
    );
}
