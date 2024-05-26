from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str

class ConnectionCreate(BaseModel):
    user_id: int
    connection_with_id: int

class UserResponse(BaseModel):
    id: int
    name: str

class ConnectionResponse(BaseModel):
    user_id: int
    connection_with_id: int
    message: str
