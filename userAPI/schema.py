from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    name: str

class UserResponse(BaseModel):
    username: str
    name: str

class ConnectionCreate(BaseModel):
    user_username: str
    connection_with_username: str

class ConnectionResponse(BaseModel):
    user_username: str
    connection_with_username: str
    message: str
