require 'csv'

class BlogsController < ApplicationController
  def index
    @data = CSV.foreach('import.csv', headers: true).map{ |row| row.to_h }
  end
end
