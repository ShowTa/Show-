class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.integer :status, default: 0, null: false, limit: 1
      t.references :user
      t.timestamps
      t.string :tags
    end
  end
end
