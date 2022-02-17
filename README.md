How to first run

```bash
docker-compose -f backend/docker_compose.yml up
```
How to first run detached mode in background

```bash
docker-compose -f backend/docker_compose.yml up -d
```

see docker container run

```bash
docker container ls
```

goes to container terminal

```bash
docker exec -it <IMAGE NAME> bash
```