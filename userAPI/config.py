from pathlib import Path

from pydantic_settings import BaseSettings


class _Settings(BaseSettings):
    DB: str = None
    API_HOST: str = None
    API_PORT: int = None

    class Config:
        env_file = ".env"
        file_path = Path(env_file)
        if not file_path.is_file():
            print("⚠️ `.env` not found in current directory")
            print("⚙️ Loading settings from environment")
        else:
            print(f"⚙️ Loading settings from dotenv @ {file_path.absolute()}")


settings = _Settings()
