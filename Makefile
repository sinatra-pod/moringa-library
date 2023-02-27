# @API
api-db-migrate:
	cd api && rake db:migrate

api-test:
	cd api && rake test

api-lint-check:
	cd api && rake lint:check

api-lint-fix:
	cd api && rake lint:fix

# @WEBAPP

# @DOCKER