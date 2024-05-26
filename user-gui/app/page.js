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
                
            </ul>
        </div>
    );
}
