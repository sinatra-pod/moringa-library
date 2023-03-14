class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :submission_status
      t.integer :primary_tech_stack, foreign_key: { to_table: :tech_stacks}, null: false
      t.string :banner_img
      t.string :categories
      t.string :license
      t.string :repository
      t.string :url
      t.integer :submitter, foreign_key: { to_table: :users}, null: false
      t.belongs_to :users
      t.belongs_to :tech_stack
      t.float :avg_rating
      t.integer :no_of_rating, default: 0
      t.datetime :created_at, default: -> { "now()" }
      t.datetime :updated_at

      t.index :id, unique: true
      t.index :repository, unique: true
      t.index :url, unique: true
    end
  end
end
