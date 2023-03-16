class CreateProjectRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :project_ratings do |t|
      t.belongs_to :projects, null: false
      t.float :rating, default: 0.0, null: false
      t.belongs_to :users, null:false

      t.timestamps
    end
  end
end
