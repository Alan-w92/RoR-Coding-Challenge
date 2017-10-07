require 'rails_helper'

RSpec.describe  Api::V1::BlogsController, type: :controller do
  let!(:blog1) { Blog.create(Id: 1, title: "Amazon rain puts out forest fire", description: 'The three day unstoppable forest fire has finally been put out by nature.', author: 'Kevin Hinder') }
  let!(:blog2) { Blog.create(Id: 2, title: "New historic discovery", description: 'A 5000 year old statue of ugera heroa has been found beneath the Sahara Desert.', author: 'Mindy Swechdager') }

  describe "GET#index" do
    it "should return a list of all the blogs" do

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json[0]["Id"]).to eq 1
      expect(returned_json[0]["author"]).to eq 'Kevin Hinder'

      expect(returned_json[1]["title"]).to eq "New historic discovery"
      expect(returned_json[1]["description"]).to eq 'A 5000 year old statue of ugera heroa has been found beneath the Sahara Desert.'

    end
  end

  describe "POST#create" do
    it "creates a new Blog" do
      post_json = { Id: 3, title: "Next gen of tvs released", description: '8k tvs can now be brought in stores.', author: 'Malvin Logger' }.to_json

      expect{ post(:create, post_json)}.to change{ Blog.count }.by 1
    end
  end
end
