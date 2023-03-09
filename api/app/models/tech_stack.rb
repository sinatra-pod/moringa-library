class TechStack < ApplicationRecord
  has_many :users, foreign_key: 'primary_tech_stack', class_name: 'User'
  has_many :projects, foreign_key: 'primary_tech_stack', class_name: 'Project'

  # @CHANGE => TODO: Get a join table for projects and tech stack (They have a many to many association)

  validates :name, { presence: true, uniqueness: true }
  validates :description, { presence: true }

end
