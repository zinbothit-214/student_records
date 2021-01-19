class AddGrade9RollNoToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :grade9_roll_no, :string
  end
end
