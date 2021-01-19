class AddSubjectToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :subject, :string
  end
end
