class Project < ActiveRecord::Base
<<<<<<< HEAD
  belongs_to :submitter, class_name: 'User'
  belongs_to :tech_stack

  # belongs_to :users
  # has_and_belongs_to_many :tech_stacks
=======
  belongs_to :users
  has_and_belongs_to_many :tech_stacks
>>>>>>> 7c59c924d44b908dcdecfd7624cc9fcbc957e3b2
  has_many :project_comments

  enum submission_status: [:IN_REVIEW, :SUBMITTED, :ACCEPTED, :REJECTED, :REQUEST_CHANGE]

  validates :title, { presence: true, length: { minimum: 6 } }
  validates :description, { presence: true, length: { minimum: 50 }, uniqueness: true }
  validates :submission_status, { presence: true }
  validates :tech_stack, { presence: true }


end
