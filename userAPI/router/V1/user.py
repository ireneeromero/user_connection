from fastapi import APIRouter, Depends, HTTPException

from psycopg2.extensions import connection as _connection

from database import get_db

from schema import ConnectionCreate, ConnectionResponse, UserCreate, UserResponse
router = APIRouter()



@router.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate, db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (name) VALUES (%s) RETURNING id, name;", (user.name,))
    db.commit()
    new_user = cursor.fetchone()
    cursor.close()
    if not new_user:
        raise HTTPException(status_code=400, detail="User creation failed")
    return new_user

@router.post("/connections/", response_model=ConnectionResponse)
def create_connection(connection: ConnectionCreate, db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT id FROM users WHERE id = %s;", (connection.user_id,))
    user = cursor.fetchone()
    cursor.execute("SELECT id FROM users WHERE id = %s;", (connection.connection_with_id,))
    connection_user = cursor.fetchone()
    if not user or not connection_user:
        raise HTTPException(status_code=404, detail="User not found")
    cursor.execute("INSERT INTO connections (user_id, connection_with_id) VALUES (%s, %s);", 
                   (connection.user_id, connection.connection_with_id))
    db.commit()
    cursor.close()
    return {"user_id": connection.user_id, "connection_with_id": connection.connection_with_id, "message": "Connection added"}


@router.get("/users/{user_id}/connections/")
def read_user_connections(user_id: int, db: _connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT u.id, u.name FROM connections c JOIN users u ON c.connection_with_id = u.id WHERE c.user_id = %s;", (user_id,))
    connections = cursor.fetchall()
    cursor.close()
    if not connections:
        raise HTTPException(status_code=404, detail="User not found or no connections")
    return {"connections": [{"id": c["id"], "name": c["name"]} for c in connections]}

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
