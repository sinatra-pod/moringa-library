require 'sinatra'
require 'jwt'

class UserController < Sinatra::Base
  JWT_SECRET = 'my$ecretK3y'

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

  # @API: Register a new user
  post '/register' do
    data = JSON.parse(request.body.read)

    email = data['email']
    password = data['password']

    if email.nil? || password.nil?
      error_response(err: 'Email and password are required')
    end

    # generate jwt token
    payload = { email: email }
    token = JWT.encode payload, JWT_SECRET, 'HS256'

    # save user to db
    user = User.new(email: email, password: password, token: token)
    user.save

    # check if user save is successful
    if user.errors.any?
      error_response(err: user.errors.full_messages.join(', '))
    end

    json_response(code: 201, data: { token: token })
  end
  


end