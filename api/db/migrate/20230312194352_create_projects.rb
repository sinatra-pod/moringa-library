class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.references :submitter, null: false, foreign_key: { to_table: :users }
      t.references :tech_stack, null: false, foreign_key: true
      t.integer :submission_status, null: false, default: 0

      t.timestamps
    end

    add_index :projects, :submission_status
    add_index :projects, [:title, :submitter_id], unique: true
  end
end
