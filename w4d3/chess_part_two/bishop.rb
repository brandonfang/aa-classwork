require_relative "piece.rb"
require_relative "slideable.rb"

class Bishop < Piece 
    include Slideable

    # def initialize
    #     super()
    # end 

    def symbol
        :B
    end
    
    private
    def move_dirs
        diagonal_dirs
    end
end