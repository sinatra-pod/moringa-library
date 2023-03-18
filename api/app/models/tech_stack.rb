class TechStack < ActiveRecord::Base
  has_many :users
  has_many :projects, through: :projects_tech_stacks

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
