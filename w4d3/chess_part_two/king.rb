require_relative "piece.rb"

class King < Piece 
    include Stepable

    def initialize
        super()
    end

    def symbol
        :K
    end

    protected
    def move_diffs
        [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    end
end