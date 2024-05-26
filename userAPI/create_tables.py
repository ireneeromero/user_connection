import psycopg2

from config import settings

DATABASE_URL = settings.DB

def create_tables():
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        username VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    """)
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS connections (
        id SERIAL PRIMARY KEY,
        user_username VARCHAR(255) NOT NULL REFERENCES users(username) ON DELETE CASCADE,
        connection_with_username VARCHAR(255) NOT NULL REFERENCES users(username) ON DELETE CASCADE,
        UNIQUE(user_username, connection_with_username)
    );
    """)
    conn.commit()
    cursor.close()
    conn.close()

if __name__ == "__main__":
    create_tables()
