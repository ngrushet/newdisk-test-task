# Backend. Тестовое задание

Тестовое задание на позицию «backend-разработчик».

Необходимо создать сервис для хранения и получения оценок за занятия. Занятия, оценки и ученики должны храниться в базе данных. Сервис должен предоставлять API в формате JSON.

## Требования

- Язык программирования NodeJS (JavaScript/TypeScript) с использованием фреймворка NestJS.
- Финальную версию нужно выложить на любой удобный для вас репозиторий с публичным доступом (github, gitlab, bitbucket, etc).
- Простая инструкция для запуска.
- 5 методов: получение списка учеников, добавление одного ученика, добавление занятия, получение списка занятий с оценками учеников, добавление оценки ученика по занятию.
- Методы документированы (Swagger).
- Хранение данных в PostgreSQL (используйте TypeORM).

Если есть сомнения по деталям — решение принять самостоятельно, но в своём README.md рекомендуем выписать вопросы и принятые решения по ним.

## Описание методов

Сервис должен реализовывать **API** с следующими эндпоинтами:

- `GET /users`
- `POST /users`
- `GET /lessons/`
- `POST /lessons`
- `POST /lessons/{id}/evaluations`

## `GET /users`

Используется для получения списка пользователей. 

Пример запроса:

```bash
curl -X GET 'http://localhost:8080/api/users' -H 'Content-Type: application/json'
```

Пример ответа:

```json
[
{
	"id": "1",
	"name": "Джонни",
	"email": "Silverhand@cyber.punk"
},
{
	"id": "2",
	"name": "Билл",
	"email": "bill@cyber.punk"
}
]
```

## `POST /users`

Используется для создания пользователя.

Пример запроса:

```bash
curl -X POST 'http://localhost:8080/api/users' -H "Content-Type: application/json" -d '{"name": "Джонни", "email": "silverhand@mail.com"}'
```

Пример ответа:

```json
{
	"id": "1",
	"name": "Джонни",
	"email": "silverhand@cyber.punk"
}
```

## `GET /lessons`

Используется для получения списка занятий с оценками пользователей.

Пример запроса:

```bash
curl -X GET 'http://localhost:8080/api/lessons' -H "Content-Type: application/json"
```

Пример ответа:

```json
[
  {
    "id":"2",
    "name": "Музыка",
    "code": "music",
    "evaluations": [
      {
      "id": "3",
      "score": "56",
      "user":
          {
          "id": "1",
          "name": "Джонни",
          "email": "silverhand@cyber.punk"
          }
          },
      {
      "id": "7",
      "score": "0",
      "user":
          {
          "id": "2",
          "name": "Билл",
          "email": "bill@cyber.punk"
          }
          }
    ]
  }
]
```

## `POST /lessons`

Используется для создания занятия.

Пример запроса:

```bash
curl -X POST 'http://localhost:8080/api/lessons' -H "Content-Type: application/json" -d '{"name": "Музыка", "code": "music"}'
```

Пример ответа:

```json
{
	"id": "2",
	"name": "Музыка",
	"code": "music"
}
```

## `POST lessons/:id/evaluations`

Проставление оценки за занятие.

Пример запроса:

```bash
curl -X POST 'http://localhost:8080/api/lessons/3/evaluations' -H "Content-Type: application/json" -d '{"user_id": "1", "score": "56"}'
```

Пример ответа:

```json
{
	"id": "3",
	"user_id": "1",
	"score": "56"
}
```

## Модель данных

Отношения между таблицами выполните самостоятельно.

### Users

| fields | type |
| --- | --- |
| id | integer |
| name | string(100) |
| email | srting(30) |

### Evaluations

| fields | type |
| --- | --- |
| id | integer |
| score | integer |
| createdAt | date |

### Lessons

| fields | type |
| --- | --- |
| id | integer |
| name | srting(100) |
| code | srting(20) |

## Усложнения

Реализовать аутентификацию запросов к сервису.

## Критерии оценки

✅ Решение соответствует требованиям.

✅ Эндпоинты возвращают ответ с соответствующим HTTP-кодом.

✅ Методы документированы.

✅ Нет лишних зависимостей.

## Есть вопрос?

****

Если есть вопрос(ы), вы всегда их можете задать связавшись с человеком по email, который выслал вам задание.