require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    other_mark = (mark == :x) ? :o : :x
    node = TicTacToeNode.new(game, mark)
    node.children.each do |child|
      return child.prev_move_pos if child.winning_node?(mark)
      return child.prev_move_pos unless child.losing_node?(mark)
    end
    raise "No non-losing nodes. Game is tied."
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end