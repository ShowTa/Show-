class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.references :articles
      t.references :user
      t.timestamps
    end
  end
end
