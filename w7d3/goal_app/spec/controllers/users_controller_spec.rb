require 'rails_helper'
require 'spec_helper'

RSpec.describe UsersController, type: :controller do
    describe "GET #new" do
        it "renders the new user's template" do
            get :new
            expect(response).to render_template(:new)
        end
    end

    describe "POST #create" do
        let(:valid_user_params) do
            { user: { username: "emily", password: "123456" } }
        end
        let(:invalid_user_params) do
            { user: { username: "emily", password: "" } }
        end

        context "with valid params" do
            it "logs in the user" do
                post :create, params: valid_user_params
                user = User.find_by(username: "emily")
                expect(session[:session_token]).to eq(user.session_token)
            end
            it "redirects to the user's show page" do
                post :create, params: valid_user_params
                user = User.find_by(username: "emily")
                expect(response).to redirect_to(user_url(user))
            end
        end

        context "with invalid params" do
            it "validates presence of password and renders new template with errors" do
                post :create, params: invalid_user_params
                expect(response).to render_template(:new)
                expect(flash[:errors]).to be_present
            end
        end
    end

end
