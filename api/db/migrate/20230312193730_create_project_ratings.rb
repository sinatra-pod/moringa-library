class CreateProjectRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :project_ratings do |t|
      t.float :rating
      t.integer :user_id
      t.integer :project_id
      t.timestamps
    end
  end
end
