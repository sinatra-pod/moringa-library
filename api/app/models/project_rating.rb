# frozen_string_literal: true

class ProjectRating < ActiveRecord::Base
  belongs_to :projects
  belongs_to :users

  validates :rating, { numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 5.0 } }
end
