#!/bin/bash
# Скрипт инициализации проекта.

exec bin/importDump.sh ./dump.sql
echo "##############################"
echo "Run migrations:"
echo "##############################"
exec bin/migrateUp.sh
echo "##############################"
echo "Init Donald Trump for Heroku"
echo "##############################"
echo "Done."
echo "Now, lets play:"
echo "
    $ npm start
"
