install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

start-even:
	npm run babel-node --sr src/bin/brain-even.js

start-balance:
	npm run babel-node -- src/bin/brain-balance.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start-progression:
	npm run babel-node -- src/bin/brain-progression.js

publish:
	npm publish

lint:
	npm run eslint .
