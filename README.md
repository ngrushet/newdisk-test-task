# Тестовое задание - компания Новый Диск

Запуск решения:
- 

- Создать файл `.production.env` в корневой директории проекта со следующим содержанием:
```env
PORT=8080

POSTGRES_HOST = postgres-db
POSTGRES_USERNAME = your_username
POSTGRES_PASSWORD = your_password
POSTGRES_DATABASE = your_database
POSTGRES_PORT = 5432
```
- запустить команду `docker-compose up -d`

Приложение будет доступно на ```localhost:8080```
Документация будет доступна на ```localhost:8080/api/docs```