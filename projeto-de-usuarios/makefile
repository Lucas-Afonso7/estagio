migrate:
	docker cp backend/migrations.sql 950c588d501c_db:/migrations.sql
	docker exec -i 950c588d501c_db psql -U postgres -d postgres -f /migrations.sql
