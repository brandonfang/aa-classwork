require_relative "piece"
require_relative "pawn.rb"
require_relative "knight.rb"
require_relative "rook.rb"
require_relative "bishop.rb"
require_relative "queen.rb"
require_relative "king.rb"
require_relative "errors.rb"


class Board
    attr_reader :rows, :null_piece

    def initialize
        # debugger
        # @null_piece = Board::NullPiece.instance
        @rows = create_board
    end
    
    def [](pos)
        x, y = pos
        @board[x][y]
    end
    
    def []=(pos, val)
        x, y = pos 
        @board[x][y] = val 
    end
    
    def move_piece(start_pos, end_pos)
        raise InvalidMove.start_pos_message if @board[start_pos] == @null_piece 
        raise InvalidMove.end_pos_message if !@board[start_pos].valid_moves.include?(end_pos)
        @board[end_pos] = @board[start_pos]
        @board[start_pos] = @null_piece
    end

    private
    def create_board
        # debugger
        board = Array.new(8) 

        board[0] = [
            Rook.new(:black, self, [0,0]), 
            Knight.new(:black, self, [0,1]), 
            Bishop.new(:black, self, [0,2]), 
            Queen.new(:black, self, [0,3]), 
            King.new(:black, self, [0,4]), 
            Bishop.new(:black, self, [0,5]), 
            Knight.new(:black, self, [0,6]), 
            Rook.new(:black, self, [0,7])
        ] 

        board[1] = Array.new(8) { |i| Pawn.new(:black, self, [1, i]) }
        board[2..5] = Array.new(4) { |row| Array.new(8) { |col| nil } } 
        board[6] = Array.new(8) {|i| Pawn.new(:white, self, [6, i])}

        board[7] = [
            Rook.new(:white, self, [0,0]), 
            Knight.new(:white, self, [0,1]), 
            Bishop.new(:white, self, [0,2]), 
            Queen.new(:white, self, [0,3]), 
            King.new(:white, self, [0,4]), 
            Bishop.new(:white, self, [0,5]), 
            Knight.new(:white, self, [0,6]), 
            Rook.new(:white, self, [0,7])
        ] 

        board
    end
 
end

board1 = Board.new()
p board1 
# pawn1 = Pawn.new(:white, board1, [1,1])