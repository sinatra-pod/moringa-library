class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :role, default: "USER"
      t.string :email
      t.string :password_hash
      t.integer :primary_tech_stack_id
      t.string :gh_username

      t.timestamps
    end
  end
end
