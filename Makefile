.PHONY: deploy

deploy:
	deno task build && rsync --delete -avz _site/ SERVER:sites/example.org
