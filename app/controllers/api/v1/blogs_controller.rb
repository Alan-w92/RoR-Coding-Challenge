class Api::V1::BlogsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    render json: Blog.all, adapter: :json
  end

  def create
    data = JSON.parse(request.body.read)
    new_blog = Blog.create(Id: data["Id"], title: data["title"], description: data["description"], author: data["author"], created_at: data["created_at"], updated_at: data["updated_at"])
    render json: new_blog, adapter: :json
  end

end
