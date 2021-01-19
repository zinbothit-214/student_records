class CreateUser < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :user_name
      t.boolean :is_admin
    end
  end
end
