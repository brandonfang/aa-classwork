class Todo < ApplicationRecord
  validates :title, :body, :done, presence: true
  validates :done, inclusion: { in: [true, false] }

end
