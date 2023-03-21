include SendGrid

# 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
# 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
# Helper method to send an email to a user with their default password
def send_password_email(user, password)
  from = SendGrid::Email.new(email: "albert.byrone@moringaschool.com", name: "Moringa Hub") # Change to your verified sender
  to = SendGrid::Email.new(email: user.email, name: user.name) 
  subject = "Moringa Hub Account Password"
  content = SendGrid::Content.new(type: "text/html", value: "Your default password is: #{password}")
  mail = SendGrid::Mail.new(from, subject, to, content)
  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  puts response.status_code
  puts response.headers

end  