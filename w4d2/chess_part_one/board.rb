require_relative "piece.rb"
require_relative "errors.rb"


class Board
    
    def initialize()
      @rows = Array.new(8) {Array.new(8, nil)}
      
      @rows.each_with_index do |row, i|
        if [0,1,6,7].include?(i)
            (0...row.length).each do |j|
                @rows[i][j] = Piece.new(:black, self, [i, j])
            end
        end
      end
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
        raise InvalidMove if @board[start_pos] == nil 

        
        

    end





end

board1 = Board.new