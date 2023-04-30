
#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
yarn --prefix cat-tinder-frontend && yarn build --prefix cat-tinder-frontend
cp -a cat-tinder-frontend/build/. public/

bundle install
bundle exec rake db:migrate
bundle exec rails db:seed