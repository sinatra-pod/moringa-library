class Project < ActiveRecord::Base
  belongs_to :submitter, class_name: "User"
  belongs_to :primary_tech_stack, class_name: "TechStack"
  has_and_belongs_to_many :tech_stacks
  has_many :comments, class_name: "ProjectComment"

  enum submission_status: [:DRAFT, :SUBMITTED, :APPROVED, :REJECTED]

end