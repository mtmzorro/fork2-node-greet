compile:
	coffee --compile --output lib src

# task test depend compile
test: compile
	mocha

# task package depend test
package: test
	npm pack

.PHONY: compile