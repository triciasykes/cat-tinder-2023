
set -o errexit

bundle install

rm -rf public

yarn cat-tinder-frontend/package.json  && yarn build cat-tinder-frontend/package.json

bundle exec rake db:migrate

cp -a cat-tinder-frontend/build/. public/