# Create tech stacks
ruby = TechStack.create(name: "Ruby", description: "A dynamic, open source programming language with a focus on simplicity and productivity.")
python = TechStack.create(name: "Python", description: "A high-level, interpreted programming language known for its readability and ease of use.")
javascript = TechStack.create(name: "JavaScript", description: "A scripting language that allows you to create dynamic, interactive websites.")

# Create users
john = User.create(name: "John", email: "john@example.com", password: "password", gh_username: "john123")
jane = User.create(name: "Jane", email: "jane@example.com", password: "password",  gh_username: "jane456")
bob = User.create(name: "Bob", email: "bob@example.com", password: "password", gh_username: "bob789")

# Create projects
# Create projects
project1 = Project.create(
  title: "Ruby on Rails Blog",
  description: "A simple blog application built with Ruby on Rails.",
  submission_status: 0,
  primary_tech_stack: ruby,
  banner_img: "https://example.com/banner1.jpg",
  categories: "blog, web development",
  license: "MIT",
  repository: "https://github.com/user/repo1",
  url: "https://example.com/project1",
  submitter: john.id
)
project2 = Project.create(
  title: "Django CMS",
  description: "A content management system built with Django.",
  submission_status: 0,
  primary_tech_stack: python,
  banner_img: "https://example.com/banner2.jpg",
  categories: "cms, web development",
  license: "BSD",
  repository: "https://github.com/user/repo2",
  url: "https://example.com/project2",
  submitter: jane.id,
)
project3 = Project.create(
  title: "React Chat App",
  description: "A real-time chat application built with React.",
  submission_status: 0,
  primary_tech_stack: javascript,
  banner_img: "https://example.com/banner3.jpg",
  categories: "chat, web development",
  license: "GPL-3.0",
  repository: "https://github.com/user/repo3",
  url: "https://example.com/project3",
  submitter: bob.id
)

# Create project tech stacks
ProjectsTechStack.create(project: project1, tech_stack: ruby)
ProjectsTechStack.create(project: project2, tech_stack: python)
ProjectsTechStack.create(project: project3, tech_stack: javascript)

# Create project comments
ProjectComment.create(comment_text: "Great job!", user: john, project: project1)
ProjectComment.create(comment_text: "Awesome project!", user: jane, project: project2)
ProjectComment.create(comment_text: "Nice work!", user: bob, project: project3)

# Create project ratings
ProjectRating.create(projects: project1, rating: 4.5, users: john)
ProjectRating.create(projects: project2, rating: 5.0, users: jane)
ProjectRating.create(projects: project3, rating: 4.0, users: bob)

# Create project reviews
ProjectReview.create(users: john, comment: "I really enjoyed using this app!", projects: project1, recommendation_status: 1)
ProjectReview.create(users: jane, comment: "This app is amazing!", projects: project2, recommendation_status: 1)
ProjectReview.create(users: bob, comment: "I had some issues with this app, but it has potential.", projects: project3,)
