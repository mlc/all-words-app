#!/bin/sh

set -ex

rm -r dist
yarn build
aws s3 cp dist/*.css s3://words.oulipo.link/ --content-type 'text/css' --cache-control 'public,max-age=31556952,immutable'
aws s3 cp dist/*.js s3://words.oulipo.link/ --content-type 'application/javascript' --cache-control 'public,max-age=31556952,immutable'
aws s3 cp dist/*.map s3://words.oulipo.link/ --content-type 'application/json' --cache-control 'public,max-age=31556952,immutable'
aws s3 cp dist/index.html s3://words.oulipo.link/index.html --cache-control 'public,max-age=3600' --content-language 'en-US' --content-type 'text/html;charset=utf-8'
aws s3 cp dist/404.html s3://words.oulipo.link/404.html --content-language 'en-US' --content-type 'text/html;charset=utf-8'
aws cloudfront create-invalidation --distribution-id E3NY7VRACZU7ZT --paths '/' '/index.html' '/404.html'
