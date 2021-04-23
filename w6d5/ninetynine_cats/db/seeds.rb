# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


cat1 = Cat.create( name: 'Philip', color: 'green', sex: 'M', birth_date: DateTime.new(2021, 4, 10, 2, 0, 0), description: 'A really chill dude.' )
cat2 = Cat.create( name: 'Larry', color: 'blue', sex: 'M', birth_date: DateTime.new(2021, 4, 10, 2, 0, 0), description: 'A really chill guy.' )

