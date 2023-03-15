class CreateTechStacks < ActiveRecord::Migration[7.0]
  def change
    create_table :tech_stacks do |t|
      t.string :name
      t.string :description
      t.string :logo
      t.belongs_to  :user, foreign_key: true , null: false
      t.belongs_to :project, foreign_key: true, null: true
      t.timestamps
    end
  end
end
