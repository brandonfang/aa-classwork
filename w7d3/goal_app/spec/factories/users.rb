FactoryBot.define do
  factory :user do
    username { Faker::Name.first_name }
    password { "123456" }
  end
end
