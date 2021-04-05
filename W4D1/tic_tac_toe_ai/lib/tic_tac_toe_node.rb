require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    result = []
    (0..2).each do |i|
      (0..2).each do |j|
        if @board[[i,j]].empty?
          new_board_state = @board.dup
          new_board_state[[i, j]] == @next_mover_mark
          new_board_state.prev_move_pos = [i, j]
          result << TicTacToeNode.new(new_board_state, "how to get mark?", self)
        end
      end
    end
    result
  end
end
