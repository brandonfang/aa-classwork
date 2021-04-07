
require_relative "board.rb"
# require_relative "pawn.rb"
# require_relative "knight.rb"
# require_relative "rook.rb"
# require_relative "bishop.rb"
# require_relative "queen.rb"
# require_relative "king.rb"

class Piece

	attr_reader :color, :board
    attr_accessor :pos

	def initialize(color, board, pos)
		@color = color
		@board = board 
		@pos = pos 
	end

	def to_s
	end

	def empty?
        @rows[pos] == null_piece
	end

	def valid_moves
        self.moves
	end

	def pos=(val)

	end

	def symbol
        self.symbol
	end

	private 
	def move_into_check(end_pos)
	end
end




