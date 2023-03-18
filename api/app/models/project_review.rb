class ProjectReview < ActiveRecord::Base
  belongs_to :users
  belongs_to :projects
  enum :recommendation_status, [ :accepted, :rejected, :change_request ]

  validates :comment, { length: { minimum: 20 } }

end