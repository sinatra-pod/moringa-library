class UserController < Base
  # @API: Register a new user
  post '/register' do
    data = JSON.parse(request.body.read)

    email = data['email']
    password = data['password']
    role = data['role']
    gh_username = data['gh_username']

    # generate jwt token
    payload = { email: email }
   

    # save user to db
    user = User.new(email: email, password: password, role:role, gh_username:gh_username, token: token)
    user.save

    # check if user save is successful
    if user.errors.any?
      error_response(err: user.errors.full_messages.join(', '))
    end

    token = JWT.encode payload, JWT_SECRET, 'HS256'

    json_response(code: 201, data: { token: token })
  end
end