class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :submission_status
      t.integer :primary_tech_stack_id
      t.string :banner_img
      t.string :categories
      t.string :license
      t.string :repository
      t.string :url
      t.integer :submitter_id
      t.float :avg_rating
      t.integer :no_of_rating, default: 0
      t.datetime :created_at, default: Time.now
      t.datetime :updated_at
    end
  end
end
