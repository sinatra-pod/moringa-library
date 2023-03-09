# frozen_string_literal: true

class ProjectReview < ApplicationRecord
  belongs_to :user
  belongs_to :project

  enum recommendation: [:SUBMITTED, :IN_REVIEW, :ACCEPTED, :REJECTED, :REQUEST_CHANGE]

end
