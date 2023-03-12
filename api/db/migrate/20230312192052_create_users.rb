class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :gh_username, null: false
      t.string :password_digest, null: false
      t.integer :role, default: "USER", null: false
      t.references :tech_stack, foreign_key: { to_table: :tech_stacks }, null: true
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
