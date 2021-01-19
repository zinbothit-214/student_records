json.extract! student, :id, :roll_no, :name, :gender, :dob, :created_at, :updated_at
json.url student_url(student, format: :json)
