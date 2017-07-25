source "https://rubygems.org"

ruby "2.3.0"

gem "autoprefixer-rails"
gem "coffee-rails", "~> 4.1.0"
gem 'font-awesome-less', '~> 4.5.0'
gem 'gibbon'
gem "high_voltage"
gem "jquery-rails"
#gem "pg"
gem "puma"
gem "rack-canonical-host"
gem "rails", "~> 4.2.0"
gem 'less-rails', '~> 2.7.0'
gem 'less-rails-bootstrap'
gem "simple_form"
gem 'therubyracer' # Ruby
gem "title"
gem "uglifier"

group :development do
  gem "quiet_assets"
  gem "refills"
  gem "spring"
  gem "spring-commands-rspec"
  gem "web-console"
  gem 'guard-livereload', require: false
end

group :development, :test do
  gem "awesome_print"
  gem "bullet"
  gem "bundler-audit", require: false
  gem "dotenv-rails"
  gem "factory_girl_rails"
  gem "pry-byebug"
  gem "pry-rails"
  gem "rspec-rails", "~> 3.4.0"
end

group :test do
  gem "capybara-webkit"
  gem "database_cleaner"
  gem "formulaic"
  gem "launchy"
  gem "shoulda-matchers"
  gem "simplecov", require: false
  gem "timecop"
  gem "webmock"
end

group :staging, :production do
  gem "rack-timeout"
end
