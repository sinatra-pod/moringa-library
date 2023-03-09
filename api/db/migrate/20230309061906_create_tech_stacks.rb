class CreateTechStacks < ActiveRecord::Migration[7.0]
  def change
    create_table :tech_stacks do |t|
      t.string :name
      t.string :description
      t.string :logo
    end
  end
end
