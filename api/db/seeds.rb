10.times do
  User.create(name: Faker::Name.name)
end