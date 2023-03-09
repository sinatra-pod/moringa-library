class CreateProjectComments < ActiveRecord::Migration[7.0]
  def change
    create_table :project_comments do |t|
      t.integer :user_id
      t.string :comment_text
      t.integer :project_id
      t.datetime :created_at, default: Time.now
      t.datetime :updated_at
    end
  end
end
