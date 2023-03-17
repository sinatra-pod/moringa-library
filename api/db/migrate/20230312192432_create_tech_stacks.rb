class CreateTechStacks < ActiveRecord::Migration[7.0]
  def change
    create_table :tech_stacks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.timestamps
    end

    add_index :tech_stacks, :name, unique: true

    create_table :projects_tech_stacks, id: false do |t|
      t.belongs_to :project, null: false
      t.belongs_to :tech_stack, null: false
    end

    add_index :projects_tech_stacks, [:project_id, :tech_stack_id], unique: true
  end
end
