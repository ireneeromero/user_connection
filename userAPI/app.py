import uvicorn
from fastapi import FastAPI
from starlette import status
from starlette.responses import Response


from config import settings
from router.V1 import (user)

app = FastAPI()


@app.get(
    "/api/health", name="Health check", status_code=status.HTTP_200_OK, tags=["health"]
)
async def health():
    return Response(status_code=status.HTTP_200_OK)


"""
  Health to the api

    [GET] '/api/health'

    def:
    Returns status to the api 

    returns:
    200 OK 
    500 Internal Server Error 
    
"""


app.include_router(user.router)


if __name__ == "__main__":
    uvicorn.run(app, host=settings.API_HOST, port=settings.API_PORT)
