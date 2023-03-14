class Project < ActiveRecord::Base
  belongs_to :users
  has_and_belongs_to_many :tech_stacks
  has_many :project_comments
  enum submission_status: [:IN_REVIEW, :SUBMITTED, :ACCEPTED, :REJECTED, :REQUEST_CHANGE]
  validates :title, { presence: true, length: { minimum: 6 } }
  validates :description, { presence: true, length: { minimum: 50 }, uniqueness: true }
  validates :submission_status, { presence: true }
  validates :tech_stack, { presence: true }
end
