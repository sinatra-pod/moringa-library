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

ActiveRecord::Schema[7.0].define(version: 2023_03_09_061942) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "project_comments", force: :cascade do |t|
    t.integer "user_id"
    t.string "comment_text"
    t.integer "project_id"
    t.datetime "created_at", default: "2023-03-09 07:55:29"
    t.datetime "updated_at"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "submission_status"
    t.integer "primary_tech_stack_id"
    t.string "banner_img"
    t.string "categories"
    t.string "license"
    t.string "repository"
    t.string "url"
    t.integer "submitter_id"
    t.float "avg_rating"
    t.integer "no_of_rating", default: 0
    t.datetime "created_at", default: "2023-03-09 07:55:29"
    t.datetime "updated_at"
  end

  create_table "spatial_ref_sys", primary_key: "srid", id: :integer, default: nil, force: :cascade do |t|
    t.string "auth_name", limit: 256
    t.integer "auth_srid"
    t.string "srtext", limit: 2048
    t.string "proj4text", limit: 2048
    t.check_constraint "srid > 0 AND srid <= 998999", name: "spatial_ref_sys_srid_check"
  end

  create_table "tech_stacks", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "logo"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "role", default: "USER"
    t.string "email"
    t.string "password_hash"
    t.integer "primary_tech_stack_id"
    t.string "gh_username"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
