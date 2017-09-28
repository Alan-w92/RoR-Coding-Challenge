# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Blog.create(
  Id: 1,
  title: 'Amazon rain puts out forest fire',
  description: 'The three day unstoppable forest fire has finally been put out by nature.',
  author: 'Kevin Hinder',
  created_at: "12.4.15",
  updated_at: "7.7.16"
)

Blog.create(
  Id: 2,
  title: 'New historic discovery',
  description: 'A 5000 year old statue of ugera heroa has been found beneath the Sahara Desert.',
  author: 'Mindy Swechdager',
  created_at: "4.4.15",
  updated_at: "8.7.15"
)

Blog.create(
  Id: 3,
  title: 'New cancer medication invented',
  description: 'Doctor Hayden reporting new medication that can fight back against cancer.',
  author: 'Tooly Washack',
  created_at: "1.24.46",
  updated_at: "3.7.46"
)
