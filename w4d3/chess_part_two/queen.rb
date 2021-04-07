require_relative "piece.rb"

class Queen < Piece 
    include Slideable

    def initialize
        super()
    end 

    def symbol
        :Q
    end
    
    private
    def move_dirs
        horizontal_dirs + diagonal_dirs
    end
end