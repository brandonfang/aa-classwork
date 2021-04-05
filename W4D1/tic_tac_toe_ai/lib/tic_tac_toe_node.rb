require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if @board.over? 
      return @board.winner == @next_mover_mark
    end

    # if player's turn
    self.children.each
    losing_node?()

    # if opponent's turn
    self.children.each
    losing_node?()
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    result = []
    (0..2).each do |i|
      (0..2).each do |j|
        if @board[[i, j]].nil?
          new_board = @board.dup
          new_board[[i, j]] = @next_mover_mark
          next_mover_mark = self.next_mover_mark == :x ? :o : :x
          result << TicTacToeNode.new(new_board, next_mover_mark, [i, j])
        end
      end
    end
    result
  end
end
