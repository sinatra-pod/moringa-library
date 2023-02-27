# frozen_string_literal: true

# @TIP: every controller will inherit from the base controller
class BaseController < Sinatra::Base
  # @API: Enable CORS headers from all origins
  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  options '*' do
    response.headers['Allow'] = 'GET, PUT, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
    response.headers['Access-Control-Allow-Origin'] = '*'
    200
  end

  # @API: Format all JSON responses
  def json_response(code: 200, data: nil)
    status = [200, 201].include?(code) ? 'SUCCESS' : 'FAILED'
    headers['Content-Type'] = 'application/json'
    return unless data

    [code, { data: data, message: status }.to_json]
  end

  # @API: Format all common error responses as JSON (thrown errors)
  def error_response(err:, code: 422)
    json_response(code: code, data: { error: err.message })
  end

  # @API: 404 handler
  not_found do
    json_response(code: 404, data: { error: 'You seem lost. That page does not exist!' })
  end
end
