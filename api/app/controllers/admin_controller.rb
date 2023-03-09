# t.string :name
# t.string :role, default: "REVIEWER"
# t.string :email (moringaschool email)
# t.string :password send password to the users email address ====> post methods

post '/admin/create_reviewer' do
  get the
  name = params[:name]
  email = params[:email]
  password = params[:password]

  # create an instance of the reviewer
  reviewer = User.new(name: name, email: email, password: password, role: 'reviewer')
  reviewer.save
  # return the response
  json_response(code: 201, data: { user: reviewer })
end
