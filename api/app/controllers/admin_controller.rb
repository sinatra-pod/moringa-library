require_relative './base_controller'

class AdminController < BaseController
  set :default_content_type, 'application/json'


      # Allow admin to add reviewers and admin account to the system
    # A random default password is sent to the user's email address
  post '/admin/add_user' do
    # Get the user data from the request 
    data = JSON.parse(request.body.read)
    name = data["name"]
    role= data["role"]
    email = data["email"]
    gh_username = data["gh_username"]
  
    # Check if the user already exists
    user = User.find_by(email: email)
    if user
      # User already exists, return an error message
      json_response(code: 400, data: { message: "User with this email already exists" })
    else
      # Generate a random password for the user
      password = SecureRandom.base64(12) + "!2"   
  
      # Create the new user with the reviewer role and the generated password
      user = User.new(name: name, email: email, role: role, password: password, gh_username:gh_username)
  
      if user.save
        send_password_email(user, password)
        # Return a success message
        json_response(code: 200, data: { user: user })
      else
        # Return an error message
        json_response(code: 400, data: { error: user.errors })
      end
  
    end
  end
  
  
  get '/admin/users/:query' do
    users = User.all
    query = params['query'] 
  
    # Search for the user based on their name, email, or id
    user = users.find { |u| u[:name].downcase == query.downcase || u[:email].downcase == query.downcase || u[:id] == query.to_i }
  
    if user
      json_response(code: 200, data: { user: user })
    else
      json_response(code: 404, data: { message: "User not found" })
    end
  end



  def json_params
    begin
      JSON.parse(request.body.read)
    rescue
      halt 400, { message:'Invalid JSON' }.to_json
    end
  end
end