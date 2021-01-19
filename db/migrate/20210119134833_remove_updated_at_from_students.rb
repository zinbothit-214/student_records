class RemoveUpdatedAtFromStudents < ActiveRecord::Migration[6.0]
  def change
    remove_column :students, :updated_at, :datetime
  end
end
