10.times do
  User.create(name: Faker::Name.name)
end

10.times do
  TechStack.create(name: Faker::Name.name, description: Faker::Book.author)
end