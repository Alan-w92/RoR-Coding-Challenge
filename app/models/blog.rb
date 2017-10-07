class Blog < ApplicationRecord
  validates :Id, presence: true, uniqueness: true, numericality: true
  validates :title, presence: true
  validates :description, presence: true
  validates :author, presence: true
end
