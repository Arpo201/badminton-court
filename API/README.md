# Start service
1. Create a `.env` file
2. Set `MONGO_PASS` in `.env` file

## Run by node
1. npm install
2. node index.js 

## Run by docker
Path: `./badminton-court/API`
1. Build image: ` docker build -t badminton-court-backend:dev . `
2. Run: `docker run -d --name badminton-court-backend -p 4000:4000 badminton-court-backend:dev`
