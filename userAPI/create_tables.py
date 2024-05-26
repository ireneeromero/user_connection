import psycopg2

from config import settings

DATABASE_URL = settings.DB

def create_tables():
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS connections (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        connection_with_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE(user_id, connection_with_id)
    );
    """)
    conn.commit()
    cursor.close()
    conn.close()

if __name__ == "__main__":
    create_tables()
