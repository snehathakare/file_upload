require 'rails_helper'

RSpec.describe ImageAttrib, type: :model do
  it { should validate_presence_of(:file) }
end
