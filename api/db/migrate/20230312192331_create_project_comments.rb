class CreateProjectComments < ActiveRecord::Migration[7.0]
  def change
    create_table :project_comments do |t|
      t.string :comment_text, null: false
      t.integer :user_id
      t.integer :project_id
      t.timestamps
    end
  end
end
