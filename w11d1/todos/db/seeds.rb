# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all


task_1 = Todo.create!(title: "Mow the lawn", body: "Cut the grass in the front yard", done: false)
task_2 = Todo.create!(title: "Get groceries", body: "Get meat so that our stomach is okay", done: false)
task_3 = Todo.create!(title: "Study", body: "Pair programming with Kush Patel", done: false)
  