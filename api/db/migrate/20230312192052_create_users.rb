class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :role, default: "USER"
      t.string :email, null: false, unique: true
      t.string :password_digest
      t.belongs_to :tech_stack
      t.belongs_to :projects
      t.string :gh_username, unique: true
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
