# Hugo-blog

[https://dimzakki.com/](https://dimzakki.com/)

This is a miscellaneous blog created with Hugo.

Hugoで作成した雑記ブログです。

## Docker command

### Build Docker images

* `docker compose build`

### Start Hugo server

* `docker compose up -d # start Docker containers` 

* `docker compose watch # hot reload`

* `docker compose down # stop and remove containers`

### Create new content

* `docker compose exec hugo hugo new <file> # create new content file in Docker container`

* `docker compose cp hugo:/src/content/<file> . # copy file from Docker container to local directory`

### Obtain PV ranking

* `docker compose -f compose.create-ranking.yml run --rm node # create JSON data for PV ranking`

### Obtain product data

* `docker compose -f compose.create-products-json.yml run --rm node # create JSON data for product data`