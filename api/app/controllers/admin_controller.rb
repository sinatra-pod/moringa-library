require_relative './base_controller'

class AdminController < BaseController
  set :default_content_type, 'application/json'


  post '/admin/add_reviewer' do
    # Allow admin to add reviewers

    # Get the user data from the request
    name = params[:name]
    email = params[:email]

    # Generate a random password for the user
    password = SecureRandom.base64(12)

    # Hash the password and save it to the database
    password_hash = BCrypt::Password.create(password)

    # Create the new user with the reviewer role and the generated password
    user = User.new(name: name, email: email, role: :reviewer, password_hash: password_hash)

    begin
      user.save
      send_password_email(user, password)

      # Return a success message
      json_response(code: 200, data: { user: user })
    rescue => e
      json_response(code: 400, data: { message: e.message })
    end
  end



  # Helper method to send an email to a user with their default password
  def send_password_email(user, password)
    Pony.mail(to: user.email, subject: "Your new account on MyApp", body: "Your default password is: #{password}")
  end

end