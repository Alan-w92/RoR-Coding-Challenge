class BlogSerializer < ActiveModel::Serializer
  attributes :id, :Id, :title, :description, :author, :created_at, :updated_at
end
