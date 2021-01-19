# `COPY students(roll_no, name, dob)
# FROM 'Documents/test-data/test_student.csv'
# DELIMITER ','
# CSV HEADER;`

require 'pg'
 def with_db
   db = PG.connect(
     dbname: 'student_record_test',
     user: 'postgres',
     password: 'postgres'
   )
   begin
      yield db
   ensure
      db.close
   end
 end

sql = File.open('path/to/your_sql.sql', 'rb') { |file| file.read }
with_db do |db|
  begin
    db.exec(sql)
  rescue PG::Error
     #####
  end
end