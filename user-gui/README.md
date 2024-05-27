# Deployment with Docker

Build the docker image

```bash
docker build -f Dockerfile.web -t user-connection:1.0.0 .
```

After that, create a `.env` file and fill the environment variables from the provided template.

Then, run the docker container as follows
```bash
docker run -p 3001:3000 --env-file .env -d user-connection:1.0.0
```