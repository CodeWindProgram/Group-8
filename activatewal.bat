@echo off
:: create wal drive in here archiver is a slot file 
set setwaldrive="C:\Program Files\PostgreSQL\13\data\pg_replslot\archiver"
set host=localhost
set slot=archiver
set user=postgres
:: mention pgadmin password
set PGPASSWORD=root
@echo on
pg_receivewal  -h %host% -p 5432 -U %user% -D %setwaldrive% -s %slot%
