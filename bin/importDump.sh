#!/bin/bash

if [ -f $1 ];
then
	read -p "Enter Mysql username: "  username
	read -p "Enter Mysql Host: "  host
	read -p "Enter Mysql DB name: "  db
	mysql -u $username -p -h $host $db < $1
else
	echo 'Usage: importDump.sh ./file.sql'
fi
