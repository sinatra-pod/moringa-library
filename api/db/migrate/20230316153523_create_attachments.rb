class CreateAttachments < ActiveRecord::Migration[7.0]
  def change
    create_table :attachments do |t|
      t.text :url, null: false
      t.integer :type, default: 0, null: false

      t.timestamps
    end
  end
end
