# Define the project API routes
require_relative "./base_controller"
require 'json'

class ProjectController < BaseController
  set :default_content_type, 'application/json'

  post '/projects' do
    content_type :json

    project_data = JSON.parse(request.body.read)
    @project = Project.new(project_data)

    if @project.save
      { success: true, project: @project }.to_json
    else
      { success: false, errors: @project.errors.full_messages }.to_json
    end
  end
end
