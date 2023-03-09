
post '/admin/create_reviewer' do
  get the
  name = params[:name]
  email = params[:email]
  password = params[:password]

  reviewer = User.new(name: name, email: email, password: password, role: 'reviewer')
  reviewer.save
  json_response(code: 201, data: { user: reviewer })
end
