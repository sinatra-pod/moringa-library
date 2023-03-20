# frozen_string_literal: true

class Attachment < ActiveRecord::Base
  enum :type, [ :image, :video, :document ]
end
