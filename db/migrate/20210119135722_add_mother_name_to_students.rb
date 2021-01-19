class AddMotherNameToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :mother_name, :string
  end
end
