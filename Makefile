run-blog:
	@docker-compose up -d blog

run-storybook:
	@docker-compose up -d storybook

run: run-blog run-storybook

stop:
	@docker-compose stop

logs-blog:
	@docker-compose logs --follow --timestamps blog

logs-storybook:
	@docker-compose logs --follow --timestamps storybook

clean-branches:
	@./scripts/delete-merged-branches.sh
