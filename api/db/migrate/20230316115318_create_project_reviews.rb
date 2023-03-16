class CreateProjectReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :project_reviews do |t|
      t.belongs_to :users, null: false
      t.text :comment, null: false
      t.belongs_to :projects, null: false
      t.integer :recommendation_status, default: 0

      t.timestamps
    end
  end
end
