migrate:
	docker cp backend/migrations.sql db:/migrations.sql
	docker exec -i db psql -U postgres -d postgres -f /migrations.sql
