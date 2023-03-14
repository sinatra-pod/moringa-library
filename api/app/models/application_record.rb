# The self.abstract_class = true line ensures
# that ApplicationRecord is not treated as a normal
# model class by ActiveRecord.
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
