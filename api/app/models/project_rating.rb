# frozen_string_literal: true

class ProjectRating < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  validates :rating, { numericality: { less_than_or_equal_to: 5.0, greater_than_or_equal_to: 0.0  } }

end
