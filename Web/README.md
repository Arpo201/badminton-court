# Start service
## Run by yarn
1. terminal: `yarn install`
2. terminal: `yarn start`
3. Open browser at domain ```localhost:8000```

## Run by docker
Path: `./badminton-court/Web`
1. Build image: `docker build -t badminton-court-frontend:dev .`
2. Run: `docker run -d --name badminton-court-frontend -p 8000:3000 badminton-court-frontend:dev`
3. Open browser at domain ```localhost:8000```

## Note
Can edit backend url in variable.js file (API_URL)
