require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos
  
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if @board.over? # base case
      return @board.winner != evaluator && !@board.winner.nil?
    end
    if evaluator == @next_mover_mark
      self.children.all? do |child|
        child.losing_node?(evaluator) 
      end
    else
      self.children.any? do |child|
        child.losing_node?(evaluator)
      end
    end
  end

  def winning_node?(evaluator)
    if @board.over?
      return @board.winner == evaluator
    end
    if self.next_mover_mark == evaluator
      self.children.any? { |child| child.winning_node?(evaluator)}
    else
      self.children.all? { |child| child.winning_node?(evaluator)}
    end
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