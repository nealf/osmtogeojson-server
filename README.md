# osmtogeojson-server
A really basic implementation of the osmtogeojson to allow submission over http

Usage
-----
### Clone the repo
```bash
git clone https://github.com/nealf/osmtogeojson-server.git
cd osmtogeojson-server
```

### Install the node modules in the container first
`docker run --name osmtogeojson-server --rm -v "$PWD":/usr/src/app -w /usr/src/app node npm install`

### Run the container
`docker run --name osmtogeojson-server -d -v "$PWD":/usr/src/app -w /usr/src/app --restart=always -p 3000:3000 node node app.js`


There is no auth, so you'll want to deploy in a private network or behind a proxy that can do auth for you.
