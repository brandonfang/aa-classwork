require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    COLORS = ['green', 'red', 'blue']
    SEXES = ['M', 'F']

    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: { in: COLORS }
    validates :sex, inclusion: { in: SEXES }

    def age 
        time_ago_in_words(birth_date)
    end

end