# @API

## Install Gems
api-gem-setup:
	cd api && bundle install

## DB Migration
api-db-migrate:
	cd api && rake db:migrate

## RSpec tests
api-test:
	cd api && rake test

## Rubocop linter (check)
api-lint-check:
	cd api && rake lint:check

## Rubocop linter (auto-fix in safe-mode)
api-lint-fix:
	cd api && rake lint:fix

# @WEBAPP

# @DOCKER