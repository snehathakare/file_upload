require 'rails_helper'

RSpec.describe "ImageAttribs", type: :request do
  describe "GET /image_attribs" do
    it "works! (now write some real specs)" do
      get image_attribs_path
      expect(response).to have_http_status(200)
    end
  end
end
