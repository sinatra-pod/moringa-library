# create some tech stacks and projects first
tech_stack_1 = TechStack.create(name: "Ruby on Rails")
tech_stack_2 = TechStack.create(name: "React")
# project_1 = Project.create(name: "Project 1")

# create some users
user_1 = User.create(
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password",
  tech_stack: tech_stack_1,
  # project: project_1,
  gh_username: "johndoe"
)

user_2 = User.create(
  name: "Jane Smith",
  email: "jane.smith@example.com",
  password: "password",
  tech_stack: tech_stack_2,
  # project: project_1,
  gh_username: "janesmith"
)
