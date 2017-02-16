class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.boolean :incompetence, default: false
      t.references :user
      t.references :article
      t.timestamps
    end
  end
end
