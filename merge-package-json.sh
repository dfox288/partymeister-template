#!/usr/bin/env bash
package-json-merge package.json.base \
packages/dfox288/motor-cms/resources/assets/npm/package.json \
packages/dfox288/motor-backend/resources/assets/npm/package.json \
packages/dfox288/motor-docs/resources/assets/npm/package.json \
packages/dfox288/partymeister-accounting/resources/assets/npm/package.json \
packages/dfox288/partymeister-frontend/resources/assets/npm/package.json \
packages/dfox288/partymeister-slides/resources/assets/npm/package.json \
> package.json
