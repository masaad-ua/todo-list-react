# Todo List Application

A simple Todo List application built with **React + TypeScript** on the frontend and **NestJS** on the backend.

## Features

* View tasks
* Add new tasks
* Delete tasks
* REST API integration
* TypeScript support
* Jest unit tests
* Modular project structure

---

## Tech Stack

### Frontend

* React
* TypeScript
* SCSS Modules
* React Icons
* Fetch API
* Jest

### Backend

* NestJS
* TypeScript
* REST API

---

## Project Structure

### Frontend

```text
src/
├── features/
│   ├── TodoInput/
│   │   └── ui/
│   │       ├── TodoInput.tsx
│   │       └── TodoInput.module.scss
│   │
│   └── TodoItem/
│       └── ui/
│           ├── TodoItem.tsx
│           └── TodoItem.module.scss
│
├── shared/
│   ├── tasksApi.ts
│   └── tasksApi.test.ts
│
├── App.tsx
├── App.module.scss
├── index.tsx
└── index.css
```

### Backend

```text
src/
├── tasks/
│   ├── dto/
│   │   └── create-task.dto.ts
│   ├── model/
│   │   └── task.model.ts
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── tasks.module.ts
│
├── app.module.ts
└── main.ts
```

---

## API Endpoints

### Get all tasks

```http
GET /tasks
```

Response:

```json
[
  {
    "id": 1,
    "text": "Learn React"
  }
]
```

---

### Create task

```http
POST /tasks
```

Request:

```json
{
  "text": "New Task"
}
```

Response:

```json
{
  "id": 2,
  "text": "New Task"
}
```

---

### Delete task

```http
DELETE /tasks/{id}
```

Example:

```http
DELETE /tasks/1
```

---

## Installation

### Backend

```bash
cd todo-server

npm install

npm run start:dev
```

Server runs on:

```text
http://localhost:3001
```

---

### Frontend

```bash
cd todo-list

npm install

npm start
```

Application runs on:

```text
http://localhost:3000
```

---

## Running Tests

```bash
npm test
```

Current tests cover:

* getTasks()
* createTask()
* deleteTask()

---

## Future Improvements

* Edit task
* Task completion status
* Persistent database (PostgreSQL/MySQL)
* Authentication
* Filtering and sorting
* Docker support
* E2E testing

---

## Author

Maksym Osypchuk

Frontend Developer

Angular • React • TypeScript • Ionic • NestJS
