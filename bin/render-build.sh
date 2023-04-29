
set -o errexit

bundle install

rm -rf public

yarn package.json  && yarn build cat-tinder-frontend

bundle exec rake db:migrate

cp -a cat-tinder-frontend/build/. public/