class AddPasswordDigestToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :password_digest, :string, null: false
    change_column_null :users, :session_token, false
    remove_column :users, :password
  end
end
