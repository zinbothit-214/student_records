class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :roll_no
      t.string :name
      t.string :gender
      t.string :dob

      t.timestamps
    end
  end
end
