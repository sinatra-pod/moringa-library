class Project < ApplicationRecord
  belongs_to :submitter, class_name: "User"
  belongs_to :primary_tech_stack, class_name: "TechStack"
  has_and_belongs_to_many :tech_stacks
  has_many :comments, class_name: "ProjectComment"
  has_many :project_reviews

  enum submission_status: [:IN_REVIEW, :SUBMITTED, :ACCEPTED, :REJECTED, :REQUEST_CHANGE]

  validates :title, { presence: true, length: { minimum: 6 } }
  validates :description, { presence: true, length: { minimum: 50 }, uniqueness: true }
  validates :submission_status, { presence: true }
  validates :primary_tech_stack, { presence: true }


end