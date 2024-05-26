
## Prerequisites

Make sure you have the following installed on your machine:

- Docker
- Docker Compose

## Setup and Deployment

Follow these steps to set up and deploy the project:

1. **Clone the repository:**

    ```bash
    https://github.com/ireneeromero/user_connection.git
    cd user_connection
    ```

2. **Set up environment variables:**

    You don't need to create `.env` files manually. The environment variables are defined directly in the `docker-compose.yml` file.

    For `userAPI`:

    ```
    DB=postgresql://user:password@db:5432/user_connections
    API_HOST=0.0.0.0
    API_PORT=8000
    ```

    For `user-gui`:

    ```
    API_URL=http://api:8000
    ```

3. **Build and run the containers:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the containers for PostgreSQL, FastAPI, and Next.js.

4. **Access the application:**

    - The Next.js web interface will be available at `http://localhost:3001`
    - The FastAPI API will be available at `http://localhost:8000`


