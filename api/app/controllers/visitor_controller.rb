# frozen_string_literal: true

# @CONTROLLER: visitor
class VisitorController < BaseController
  # list all accepted submissions
  get '/guest/projects' do
    @projects = Project.where(submission_status: 'ACCEPTED').order(created_at: :desc)
    json_response(data: { projects: @projects })
  end

  # search by description, (stack) or title
  get '/guest/projects/search/:query' do
    query = params[:query].to_s
    if query
      begin
        sql = "(title LIKE :query OR description LIKE :query) AND submission_status = 'ACCEPTED'"
        @projects = Project
                    .where(sql, { query: "%#{query}%" })
                    .order(created_at: :desc)
        json_response(data: { projects: @projects })
      rescue StandardError => e
        error_response(err: e)
      end
    else
      json_response(data: { info: 'Your search request was empty' }, code: 422)
    end
  end
end
