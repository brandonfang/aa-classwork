require 'rails_helper'
require 'spec_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  subject(:user) { User.create(username: "john", password: "123456") }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_uniqueness_of(:username) }
  
  describe "password encryption" do
    it "does not save password to the database" do
      FactoryBot.create(:user, username: "john", password: "123456")
      user = User.find_by(username: "john")
      expect(user.password).not_to eq("123456")
    end
    it "encrypts password using BCrypt" do
      expect(BCrypt::Password).to receive(:create).with("123456")
      FactoryBot.build(:user, password: "123456")
    end
  end

end
