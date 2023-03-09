class CreateProjectReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :project_reviews do |t|
      t.belongs_to :user, foreign_key: true, null: false
      t.string :comment, null: false
      t.belongs_to :project, foreign_key: true , null: false
      t.integer :recommendation, default: 0

      t.timestamps
    end
  end
end
