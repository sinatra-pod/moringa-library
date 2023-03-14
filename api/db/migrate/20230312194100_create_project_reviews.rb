class CreateProjectReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :project_reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.integer :recommendation, null: false

      t.timestamps
    end

    add_index :project_reviews, [:user_id, :project_id], unique: true
    add_index :project_reviews, :recommendation
  end
end
