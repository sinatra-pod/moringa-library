require 'sinatra/activerecord'

class TechStack < ActiveRecord::Base
  has_many :projects
end

class User < ActiveRecord::Base
  belongs_to :primary_tech_stack, class_name: 'TechStack', optional: true
  has_many :submitted_projects, class_name: 'Project', foreign_key: 'submitter'
  has_many :project_comments, foreign_key: 'user'
end

class Project < ActiveRecord::Base
  belongs_to :primary_tech_stack, class_name: 'TechStack'
  belongs_to :submitter, class_name: 'User'
  has_many :project_comments
  has_many :attachments, through: :project_attachments
  has_many :project_attachments
  has_many :project_reviews
end

class ProjectComment < ActiveRecord::Base
  belongs_to :user
  belongs_to :project
end

class Attachment < ActiveRecord::Base
  has_many :project_attachments
  has_many :projects, through: :project_attachments
end

class ProjectAttachment < ActiveRecord::Base
  belongs_to :project
  belongs_to :attachment
end

class ProjectReview < ActiveRecord::Base
  belongs_to :reviewer, class_name: 'User'
  belongs_to :project
end



# In this example, we define six ActiveRecord models: TechStack, User, Project, ProjectComment, Attachment, and ProjectReview.

# We use the has_many association to specify that a TechStack can have multiple projects, and the belongs_to association to specify that a Project belongs to a TechStack.

# For the User model, we use the belongs_to association to specify that a User can have a primary_tech_stack which refers to a TechStack. We also use the has_many association to specify that a User can have multiple submitted_projects and project_comments, where submitted_projects are Project instances that have this user as their submitter and project_comments are comments that the user has made on different Project instances.

# For the Project model, we use the belongs_to association to specify that a Project belongs to a primary_tech_stack which refers to a TechStack and a submitter which refers to a User. We also use the has_many association to specify that a Project can have multiple project_comments, attachments and project_reviews.

# For the ProjectComment model, we use the belongs_to association to specify that a ProjectComment belongs to both a User and a Project.

# For the Attachment model, we use the has_many association to specify that an Attachment can be associated with multiple projects through the project_attachments table.

# For the ProjectAttachment model, we use the belongs_to association to specify that a ProjectAttachment belongs to both a Project and an Attachment.

# For the ProjectReview model, we use the belongs_to association to specify that a ProjectReview belongs to both a User and a Project.