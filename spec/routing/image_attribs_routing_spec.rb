require "rails_helper"

RSpec.describe ImageAttribsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/image_attribs").to route_to("image_attribs#index")
    end

    it "routes to #show" do
      expect(:get => "/image_attribs/1").to route_to("image_attribs#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/image_attribs").to route_to("image_attribs#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/image_attribs/1").to route_to("image_attribs#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/image_attribs/1").to route_to("image_attribs#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/image_attribs/1").to route_to("image_attribs#destroy", :id => "1")
    end
  end
end
