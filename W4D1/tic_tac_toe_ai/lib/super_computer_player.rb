require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    other_mark = (mark == :x) ? :o : :x
    node = TicTacToeNode.new(game.board, mark)
    # queue = [node]
    # until queue.empty?
    #   p queue
    #   working_node = queue.shift
    #   return working_node.prev_move_pos if working_node.winning_node?(mark)
    #   queue.concat(working_node.children)
    # end



    node.children.each do |child|
      # p 'loop1'
      return child.prev_move_pos if child.winning_node?(mark)
    end
    node.children.each do |child|
      # p 'loop2'
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