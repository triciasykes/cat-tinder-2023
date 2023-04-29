
set -o errexit

bundle install

rm -rf public

yarn add --prefix cat-tinder-frontend/package.json  && yarn build --prefix cat-tinder-frontend

bundle exec rake db:migrate

cp -a cat-tinder-frontend/build/. public/