class ProjectComment < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  validates :comment_text, presence: true
end