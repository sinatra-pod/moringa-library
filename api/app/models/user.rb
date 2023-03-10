class User < ActiveRecord::Base
  has_secure_password

  has_many :projects
  has_many :project_reviews
  belongs_to :primary_tech_stack, class_name: 'TechStack', foreign_key: 'primary_tech_stack', optional: true
  enum role: [:admin, :reviewer, :user]

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
  validates :password, presence: true, length: { minimum: 6 }, format: { with: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/,
    message: "must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character" }
  validates :role, presence: true
  validates :primary_tech_stack, presence: true
end
