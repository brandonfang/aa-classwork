class User < ApplicationRecord
    validate :username, presence: true, uniquness: true

end