import psycopg2
from psycopg2.extras import RealDictCursor
from config import settings

DATABASE_URL = settings.DB

def get_db():
    conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
    try:
        yield conn
    finally:
        conn.close()