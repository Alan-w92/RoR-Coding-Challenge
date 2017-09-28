class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.integer :Id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :author, null: false
      t.string :created_at
      t.string :updated_at
    end
  end
end
