require_relative "piece.rb"

class Knight < Piece 
    include Stepable

    def initialize
        super()
    end

    def symbols
        :N
    end

    protected
    def move_diffs
        [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]]
    end
end