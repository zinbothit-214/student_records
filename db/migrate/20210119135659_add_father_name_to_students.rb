class AddFatherNameToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :father_name, :string
  end
end
