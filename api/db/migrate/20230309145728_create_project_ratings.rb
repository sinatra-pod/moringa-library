class CreateProjectRatings < ActiveRecord::Migration[7.0]
  def change
    t.belongs_to :user, foreign_key: true, null: false
    t.belongs_to :project, foreign_key: true, null: false
    t.float :rating, null: false , default: 2.5
  end
end
