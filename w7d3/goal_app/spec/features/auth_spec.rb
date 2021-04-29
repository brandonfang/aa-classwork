require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  background :each do #runs this before each specific feature test 
    visit new_user_path #/users/new 
  end

  scenario 'has a new user page' do 
    expect(page).to have_content("Sign up")
  end

  scenario "takes a username, password" do
    expect(page).to have_content("Username")
    expect(page).to have_content("Password")
  end

  feature 'signing up a user' do
    scenario 'shows username on the homepage after signup' do
      visit new_user_url
      fill_in 'username', with: 'testing_username'
      fill_in 'password', with: '123456'
      click_on 'Create user'
      expect(page).to have_content("testing_username")
    end
  end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login' do
    expect(page).to have_content("testing_username")
  end
end

feature 'logging out' do
  scenario 'begins with a logged out state' do
    
  end

  scenario 'doesn\'t show username on the homepage after logout' do
    expect(page).not_to have_content("testing_username")
  end

end
