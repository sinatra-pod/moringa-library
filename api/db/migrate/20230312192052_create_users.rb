class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :role, default: "USER"
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.belongs_to :tech_stack
      t.string :gh_username, unique: true, null: false
      t.timestamps

    end
  end
end
