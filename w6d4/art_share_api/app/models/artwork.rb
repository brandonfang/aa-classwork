class Artwork < ApplicationRecord
    
    validate :artworks, presence: true, uniquness :true




end