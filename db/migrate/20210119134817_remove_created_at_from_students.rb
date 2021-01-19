class RemoveCreatedAtFromStudents < ActiveRecord::Migration[6.0]
  def change
    remove_column :students, :created_at, :datetime
  end
end
