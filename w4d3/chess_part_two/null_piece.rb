require_relative "./piece.rb"
require "singleton"
require_relative "./board.rb"

class NullPiece < Piece 
    include Singleton
    # attr_reader :color, :symbol
    def initialize
        @color = nil
    end
end