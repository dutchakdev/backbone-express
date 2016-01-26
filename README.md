##### Первий запуск [![Build Status](https://travis-ci.org/dutchakdev/backbone-express.svg?branch=master)](https://travis-ci.org/dutchakdev/backbone-express)

Для первого запуска проекта нужно запустить bash скрипт, который поставит все пакеты, импортирует sql файл для тестового задания и выполнит миграции. Для первого запуска нужно добавить параметр `import`

```bash
$ chmod -R +x ./bin # Права за выполнение
$ npm run build import
```

После того как все зависимости установлены мы можем запустить проект командой:

```bash
$ npm start
```

##### Комментарии

###### Rest

Доступные методы:

```
GET 	/api/v1/images
POST	/api/v1/likes
GET 	/api/v1/categories
```
