# FIT30

A full-stack fitness app for 30-day programs: workout plans, and progress tracking

## Features

- Create, view, and follow 30-day workout programs
- Track daily progress and completion
- Responsive web UI and REST API

## Tech stack

- Frontend: React (CRA / Vite)
- Optional: Docker for local/dev environments

## Quick start

1. Clone

```bash
git clone <repo-url> FIT30
cd FIT30
```

2. Create environment files

- server/.env

``` bash
PORT=4000
DATABASE_URL=postgres://user:pass@localhost:5432/fit30
JWT_SECRET=your_jwt_secret
```

- client/.env (if needed)

``` bash
REACT_APP_API_URL=http://localhost:4000/api
```

3. Install dependencies

```bash
# server
cd server
npm install

# client
cd ../client
npm install
```

4. Run in development

```bash
# in two terminals

# server
cd server
npm run dev

# client
cd client
npm start
```

API will be available at http://localhost:4000 (or configured PORT) and the frontend at http://localhost:3000.

## Scripts (example)

- server
    - npm run dev — start server in dev mode (nodemon)
    - npm start — start production server
    - npm test — run backend tests
- client
    - npm start — run dev frontend
    - npm run build — build production assets
    - npm test — run frontend tests

## Database

- Run migrations/seeds (depending on setup)
```bash
cd server
npm run migrate
npm run seed
```
- For simple local dev, configure DATABASE_URL to a local SQLite file or use Docker Compose.

## Docker (optional)
A simple docker-compose.yml can launch the API, frontend, and Postgres. Example:
```bash
docker-compose up --build
```

## Folder structure (suggested)

- client/ — React app
- server/ — Express API
    - src/
        - controllers/
        - models/
        - routes/
        - services/
- scripts/ — utility scripts
- docker-compose.yml
- .env.example

## Testing

- Unit and integration tests for backend and frontend where applicable:

```bash
cd server && npm test
cd client && npm test
```

## Contributing

- Fork -> feature branch -> PR
- Follow coding style (prettier / eslint)
- Include tests for new features

## License

Specify a license (e.g., MIT) in LICENSE file.

## Author

Kaushal Bhattarai
