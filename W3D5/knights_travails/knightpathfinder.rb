class KnightPathFinder

    def initialize(position)
        @position = position
        @x = position[0]
        @y = position[1]
        @considered_positions = [@position]
        # @root_node = 
    end

    def self.valid_moves(position)
        moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
        answer = []
        moves.each do |move|
            x, y = position
            new_position = [(x + move[0]), (y + move[1])]
            next if new_position.any? { |num| num <= 0 || num >= 7 }
            answer << new_position
        end
        answer
    end

    def new_move_positions(position)
        moves = KnightPathFinder.valid_moves(position)
        new_moves = moves.select {|el| !@considered_positions.include?(el) }
        @considered_positions.concat(new_moves) unless new_moves.empty?
        new_moves
    end

    def build_move_tree
        tree = []
        queue = [self]
        until queue.empty?
            new_moves = new_move_positions(queue.shift)
            new_moves.each do |move| # a move is [#, #]
                queue << [@position, move]
            end

        end

        tree
    end

end

k = KnightPathFinder.new([0,0])
# p k.build_move_tree
p k.new_move_positions([3,3])
# p k.new_move_positions([1,2])

#                ______[0,0]_______
#              /                   \
#        ___[1,2]                 [2,1] 
#      /     |   \               |    \ 
# [2, 4] [3, 3] [3, 1]       [1, 3]   [4, 2]


#
#   [[0,0],
#  [[0,0], [1,2]], [[0,0], [2,1]]]
#
#