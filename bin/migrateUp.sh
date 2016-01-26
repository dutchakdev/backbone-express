#!/bin/bash
./node_modules/db-migrate/bin/db-migrate --migrations-dir='./app/migrations' --sql-file=./dump.sql --config=./app/config/database.json --env=prod up
