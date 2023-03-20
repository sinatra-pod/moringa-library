# frozen_string_literal: true

# require_relative './base_controller'
# require 'json'
# # @TIP: every controller will inherit from the base controller
# class ProjectController < BaseController
#   post '/projects' do
#     title = params[:title]
#     description = params[:description]
#     submission_status = params[:submission_status]
#     tech_stack_ids = params[:tech_stack_ids]

#     # create a new project instance and set its attributes
#     project = Project.new
#     project.title = title
#     project.description = description
#     project.submission_status = submission_status
#     project.tech_stack_ids = tech_stack_ids

#     # save the project to the database
#     if project.save
#       # return a success response
#       status 201
#       { message: 'Project created successfully', project: project }.to_json
#     else
#       # return an error response
#       status 400
#       { message: 'Project creation failed', errors: project.errors.full_messages }.to_json
#     end
#   end
# end
