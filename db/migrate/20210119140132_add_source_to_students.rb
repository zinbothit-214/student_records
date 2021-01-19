class AddSourceToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :source, :string
  end
end
