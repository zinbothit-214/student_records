require File.expand_path('../../config/environment',  __FILE__)

File.open("students.json", "w") { |f| f.write Student.all.to_json }
