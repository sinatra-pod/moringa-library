class TechStack < ActiveRecord::Base
  has_many :users, foreign_key: 'primary_tech_stack', class_name: 'User'
  has_many :projects, foreign_key: 'primary_tech_stack', class_name: 'Project'
end
