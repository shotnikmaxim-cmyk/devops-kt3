# devops-kt3

Учебное Node.js-приложение для задания по CI/CD.

## Запуск

```sh
npm ci
npm start
```

Приложение слушает порт `3000` (или значение `PORT`). Маршрут `/` возвращает `KT3 App`, а `/health` — JSON `{"status":"ok"}`.

## Проверки

```sh
npm run lint
npm test
```

Для тестов требуется доступная PostgreSQL с настройками из переменных `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD` и `PGDATABASE`. Workflow поднимает PostgreSQL 16 автоматически.

## Docker

```sh
docker build -t devops-kt3 .
docker run --rm -p 3000:3000 devops-kt3
```

Workflow `.github/workflows/ci-cd.yml` запускает lint и тесты на `main` и `develop`, а образ публикует в GHCR после успешного push в `main`.

