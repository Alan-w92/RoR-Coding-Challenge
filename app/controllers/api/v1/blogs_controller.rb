class Api::V1::BlogsController < ApplicationController
  def index
    render json: Blog.all
  end
end
