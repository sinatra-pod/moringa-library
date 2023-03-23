# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_16_153523) do
  create_table "attachments", force: :cascade do |t|
    t.text "url", null: false
    t.integer "type", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_comments", force: :cascade do |t|
    t.string "comment_text", null: false
    t.integer "user_id"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_ratings", force: :cascade do |t|
    t.integer "projects_id", null: false
    t.float "rating", default: 0.0, null: false
    t.integer "users_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["projects_id"], name: "index_project_ratings_on_projects_id"
    t.index ["users_id"], name: "index_project_ratings_on_users_id"
  end

  create_table "project_reviews", force: :cascade do |t|
    t.integer "users_id", null: false
    t.text "comment", null: false
    t.integer "projects_id", null: false
    t.integer "recommendation_status", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["projects_id"], name: "index_project_reviews_on_projects_id"
    t.index ["users_id"], name: "index_project_reviews_on_users_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.integer "submission_status", default: 0, null: false
    t.integer "primary_tech_stack", null: false
    t.string "banner_img", null: false
    t.string "categories", null: false
    t.string "license", null: false
    t.string "repository", null: false
    t.string "url", null: false
    t.integer "submitter", null: false
    t.integer "users_id"
    t.integer "tech_stack_id"
    t.float "avg_rating", null: false
    t.integer "no_of_rating", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id"], name: "index_projects_on_id", unique: true
    t.index ["repository"], name: "index_projects_on_repository", unique: true
    t.index ["tech_stack_id"], name: "index_projects_on_tech_stack_id"
    t.index ["url"], name: "index_projects_on_url", unique: true
    t.index ["users_id"], name: "index_projects_on_users_id"
  end

  create_table "projects_tech_stacks", id: false, force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "tech_stack_id", null: false
    t.index ["project_id", "tech_stack_id"], name: "index_projects_tech_stacks_on_project_id_and_tech_stack_id", unique: true
    t.index ["project_id"], name: "index_projects_tech_stacks_on_project_id"
    t.index ["tech_stack_id"], name: "index_projects_tech_stacks_on_tech_stack_id"
  end

  create_table "tech_stacks", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.integer "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tech_stacks_on_name", unique: true
    t.index ["users_id"], name: "index_tech_stacks_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "role", default: "USER"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.integer "tech_stack_id"
    t.integer "projects_id"
    t.string "gh_username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["projects_id"], name: "index_users_on_projects_id"
    t.index ["tech_stack_id"], name: "index_users_on_tech_stack_id"
  end

end
