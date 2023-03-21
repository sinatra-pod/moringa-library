ENV["RACK_ENV"] ||= "developement"

require 'bundler/setup'

Bundler.require(:default, ENV["RACK_ENV"])

require_all "app"
