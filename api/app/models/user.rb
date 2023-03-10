# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  has_many :projects
  has_many :project_reviews
  belongs_to :primary_tech_stack, class_name: 'TechStack', foreign_key: 'primary_tech_stack', optional: true
  enum role: [:admin, :reviewer, :user]

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :role, presence: true
  validates :primary_tech_stack, presence: true

  validate :authentic_email
  validate :authentic_password

  # email authenticity
  def authentic_email
    unless email && email.match?(/\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i)
      errors.add(:email, "That does not look like a valid email!")
    end
  end

  # password authenticity
  def authentic_password
    unless password && password.match?(/\A(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[[:^alnum:]])/x)
      errors.add(:password, "Password must contain at least one special character, one digit, one uppercase, one lowercase letter and at least 6 characters.")
    end
  end
end
