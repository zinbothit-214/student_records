json.extract! user, :id, :user_name, :is_admin, :created_at, :updated_at
json.url user_url(user, format: :json)
