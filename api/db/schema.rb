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

ActiveRecord::Schema[7.0].define(version: 2023_03_12_194352) do
  create_table "project_comments", force: :cascade do |t|
    t.string "comment_text"
    t.integer "user_id"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_ratings", force: :cascade do |t|
    t.float "rating"
    t.integer "user_id"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "project_id", null: false
    t.integer "recommendation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_reviews_on_project_id"
    t.index ["recommendation"], name: "index_project_reviews_on_recommendation"
    t.index ["user_id", "project_id"], name: "index_project_reviews_on_user_id_and_project_id", unique: true
    t.index ["user_id"], name: "index_project_reviews_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "submitter_id", null: false
    t.integer "tech_stack_id", null: false
    t.integer "submission_status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["submission_status"], name: "index_projects_on_submission_status"
    t.index ["submitter_id"], name: "index_projects_on_submitter_id"
    t.index ["tech_stack_id"], name: "index_projects_on_tech_stack_id"
    t.index ["title", "submitter_id"], name: "index_projects_on_title_and_submitter_id", unique: true
  end

  create_table "projects_tech_stacks", id: false, force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "tech_stack_id", null: false
    t.index ["project_id", "tech_stack_id"], name: "index_projects_tech_stacks_on_project_id_and_tech_stack_id", unique: true
    t.index ["project_id"], name: "index_projects_tech_stacks_on_project_id"
    t.index ["tech_stack_id"], name: "inde`x_proj`ects_tech_stacks_on_tech_stack_id"
  end

  create_table "tech_stacks", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tech_stacks_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "gh_username", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.integer "role", null: false
    t.integer "tech_stack_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["tech_stack_id"], name: "index_users_on_tech_stack_id"
  end

  add_foreign_key "project_reviews", "projects"
  add_foreign_key "project_reviews", "users"
  add_foreign_key "projects", "tech_stacks"
  add_foreign_key "projects", "users", column: "submitter_id"
  add_foreign_key "users", "tech_stacks"
end
