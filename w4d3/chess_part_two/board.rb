require_relative "piece.rb"
require_relative "errors.rb"

class Board
    attr_reader :rows :null_piece

    def initialize
        @null_piece = NullPiece.instance
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
        board = Array.new(8) { Array.new(8, @null_piece) }
        board.each_with_index do |row, i|
            if [6,7].include?(i)
                (0...row.length).each do |j|
                    if 
                @rows[i][j] = Piece.new(:white, self, [i, j])
                end
            elsif [0,1].include?(i)
                (0...row.length).each do |j|
                    if 
                    @rows[i][j] = Piece.new(:black, self, [i, j])
                end
            end
        end
        board 
    end

  
end

# board1 = Board.new
# board1.move([3,3], [4,4])