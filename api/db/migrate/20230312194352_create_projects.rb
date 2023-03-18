class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :submission_status, null: false, default: 0
      t.integer :primary_tech_stack, foreign_key: { to_table: :tech_stacks}, null: false
      t.string :banner_img, null: false
      t.string :categories, null: false
      t.string :license, null: false
      t.string :repository, null: false
      t.string :url, null: false
      t.integer :submitter, foreign_key: { to_table: :users}, null: false
      t.belongs_to :users
      t.belongs_to :tech_stack
      t.float :avg_rating, null: false
      t.integer :no_of_rating, default: 0
      t.timestamps

      t.index :id, unique: true
      t.index :repository, unique: true
      t.index :url, unique: true
    end
  end
end
