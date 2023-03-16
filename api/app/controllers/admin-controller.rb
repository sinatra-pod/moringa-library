require_relative './base_controller'
require 'pony'
require 'sendgrid-ruby'
include SendGrid


class AdminController < BaseController
  set :default_content_type, 'application/json'
  # t.string :name, null: false
  # t.string :role, default: "USER"
  # t.string :email, null: false, unique: true
  # t.string :password_digest, null: false
  # t.belongs_to :tech_stack
  # t.belongs_to :projects
  # t.string :gh_username, unique: true, null: false

  post '/admin/add_user' do
    # Allow admin to add reviewers and admin account to the system
    # A randdom default password is send to the users email address 

    # Get the user data from the request 
    data = JSON.parse(request.body.read)

    name = data["name"]
    role= data["role"]
    email = data["email"]
    gh_username = data["gh_username"]


    # Generate a random password for the user
    password = SecureRandom.base64(12)

    # Hash the password and save it to the database
    password_hash = BCrypt::Password.create(password)

    # Create the new user with the reviewer role and the generated password
    user = User.new(name: name, email: email, role: role, password_digest: password_hash, gh_username:gh_username)

    begin
      user.save

      pp user
      send_password_email(user, password)
      # Return a success message
      json_response(code: 200, data: { user: user })
    rescue StandardError => e
      json_response(code: 400, data: { message: e.message })
    end
  end



  # Helper method to send an email to a user with their default password
  def send_password_email(user, password)
    from = SendGrid::Email.new(email: "albertbyrone1677@gmail.com", name: "Albert Byrone") # Change to your verified sender
    to = SendGrid::Email.new(email: user.email, name: user.name) 
    subject = "Moringa Hub Account Password"
    content = SendGrid::Content.new(type: "text/html", value: "Your default password is: #{password}")
    mail = SendGrid::Mail.new(from, subject, to, content)
    sg = SendGrid::API.new(api_key: "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")
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts response.status_code
    puts response.headers

    # Pony.mail(to: user.email, subject: "Your new account on MyApp", body: "Your default password is: #{password}")
  end  

  def json_params
    begin
      JSON.parse(request.body.read)
    rescue
      halt 400, { message:'Invalid JSON' }.to_json
    end
  end
end