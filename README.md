
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


### TO SET UP DB + API

2. **Set up environment variables:**

    You don't need to create `.env` files manually. The environment variables are defined directly in the `docker-compose.yml` file. Your must change the `API_HOST`.

    For `userAPI`:

    ```
    DB=postgresql://user:password@db:5432/user_connections
    API_HOST=0.0.0.0
    API_PORT=8000
    ```



3. **Build and run the containers:**

    ```bash
    docker compose up --build
    ```

    This command will build the Docker images and start the containers for PostgreSQL and FastAPI.

    - The FastAPI API will be available at `http://API_HOST:API_PORT`
  

### TO SET UP DB + API

5. **Build up the application:**


    Open a new terminal and build the docker image

    ```bash
    cd user-gui
    docker build -f Dockerfile.web -t user-connection:1.0.0 .
    ```

    After that, create a `.env` file and fill the environment variables from the provided template.

    You must change your `API_URL` with the IP where the API has been allocated on your machine.

    ```API_URL=http://API_HOST:API_PORT```

    Then, run the docker container as follows:

    ```bash
    docker run -p 3001:3000 --env-file .env -d user-connection:1.0.0
    ```

6. **Access the application:**

    - The Next.js web interface will be available at `http://YOUR_IP:3001`
    


