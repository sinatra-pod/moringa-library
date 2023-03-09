class User < ActiveRecord::Base
  has_many :projects
  belongs_to :primary_tech_stack, class_name: 'TechStack', foreign_key: 'primary_tech_stack', optional: true
  enum role: [:admin, :reviewer, :user]

end