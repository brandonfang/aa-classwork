require_relative "piece.rb"
require_relative "slideable.rb"

class Rook < Piece 
    include Slideable

    # def initialize
    #     super
    # end 

    def symbol
        :R
    end
    
    private
    def move_dirs
        horizontal_dirs
    end
end