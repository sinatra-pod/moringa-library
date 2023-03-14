# frozen_string_literal: true

APP = Rack::Builder.parse_file('config.ru').first

RSpec.describe 'User' do
  include Rack::Test::Methods

  def app
    APP
  end

  context 'Model Validation' do
    it 'should accept only valid email data' do
      user1 = User.create(password: pass)
      user2 = User.create(email: email(valid: false), password: pass)
      user3 = User.create(email: email)
      expect(user2.errors).to include(:email)
      expect(user1.errors).to include(:email)
      expect(user3.errors).to_not include(:email)
    end

    it 'should accept only valid passwords' do
      user1 = User.create(email: email, password: pass(valid: false))
      user2 = User.create(email: email, password: pass)
      expect(user1.errors).to include(:password)
      expect(user2.errors).to_not include(:password)
    end
  end

  # some helper methods
  private

  def pass(valid: true)
    valid ? 'Pass@1234' : 'hello'
  end

  def email(valid: true)
    valid ? 'email@mail.com' : 'mail.com'
  end
end
