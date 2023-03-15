class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :role, default: "USER"
      t.string :email, null: false, unique: true
      t.string :password_hash
      t.integer :tech_stack_id, foreign_key: true, null: false, default: 1
      t.string :gh_username, unique: true
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end