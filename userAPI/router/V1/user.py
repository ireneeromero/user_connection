from fastapi import APIRouter, Depends, HTTPException

from psycopg2.extensions import connection as _connection

from database import get_db

from schema import ConnectionCreate, ConnectionResponse, UserCreate, UserResponse

router = APIRouter()

@router.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate, db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (username, name) VALUES (%s, %s) RETURNING username, name;", (user.username, user.name))
    db.commit()
    new_user = cursor.fetchone()
    cursor.close()
    if not new_user:
        raise HTTPException(status_code=400, detail="User creation failed")
    return new_user

@router.post("/connections/", response_model=ConnectionResponse)
def create_connection(connection: ConnectionCreate, db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT username FROM users WHERE username = %s;", (connection.user_username,))
    user = cursor.fetchone()
    cursor.execute("SELECT username FROM users WHERE username = %s;", (connection.connection_with_username,))
    connection_user = cursor.fetchone()
    if not user or not connection_user:
        raise HTTPException(status_code=404, detail="User not found")
    cursor.execute("INSERT INTO connections (user_username, connection_with_username) VALUES (%s, %s);", 
                   (connection.user_username, connection.connection_with_username))
    db.commit()
    cursor.close()
    return {"user_username": connection.user_username, "connection_with_username": connection.connection_with_username, "message": "Connection added"}

@router.get("/users/{username}/connections/")
def read_user_connections(username: str, db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT c.connection_with_username FROM connections c WHERE c.user_username = %s;", (username,))
    connections = cursor.fetchall()
    cursor.close()
    if not connections:  
        return {"connections": [c[0] for c in connections]}
    return {"connections": [c["connection_with_username"] for c in connections]}

@router.get("/stats/")
def get_stats(db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT COUNT(*) AS total_users FROM users;")
    total_users = cursor.fetchone()["total_users"]
    cursor.execute("SELECT COUNT(*) AS total_connections FROM connections;")
    total_connections = cursor.fetchone()["total_connections"]
    cursor.close()
    stats = {
        "total_users": total_users,
        "total_connections": total_connections
    }
    return stats

@router.get("/get_users/", response_model=list[str])
def get_all_usernames(db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT username FROM users;")
    usernames = cursor.fetchall()
    cursor.close()
    return [user["username"] for user in usernames]
