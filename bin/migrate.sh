#!/bin/bash
./node_modules/db-migrate/bin/db-migrate --migrations-dir='./app/migrations' --config=./app/database.json --env=prod $@
