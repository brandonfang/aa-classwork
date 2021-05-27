class CreateApiUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :api_users do |t|
      t.string :username, null: false, index: { unique: true }
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    
  end
end
