ENV["RACK_ENV"] ||= "test"

require 'bundler/setup'

Bundler.require(:default, ENV["RACK_ENV"])

require_all "app"
