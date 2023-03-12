class TechStack < ApplicationRecord
  has_many :users, foreign_key: 'tech_stack_id'
  has_many :projects_tech_stacks
  has_many :projects, through: :projects_tech_stacks

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
