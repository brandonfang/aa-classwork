require_relative './poly_tree_node.rb'

class KnightPathFinder
    attr_reader :root_node

    def initialize(position)
        @position = position
        @x = position[0]
        @y = position[1]
        @considered_positions = [@position]
        @root_node = PolyTreeNode.new(@position)
        self.build_move_tree
    end

    def self.valid_moves(position)
        moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
        answer = []
        moves.each do |move|
            x, y = position
            new_position = [(x + move[0]), (y + move[1])]
            next if new_position.any? { |num| num < 0 || num > 7 }
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
        queue = [@root_node]
        until queue.empty?
            node = queue.shift
            new_moves = new_move_positions(node.value)
            new_moves.each do |move| 
                next_node = PolyTreeNode.new(move)
                node.add_child(next_node)
                queue << next_node 
            end
        end
    end

    def find_path(end_pos)
        queue = [@root_node]
        until queue.empty?
            node = queue.shift
            if node.value == end_pos
                temp = node
                break
            end
            queue.concat(node.children)
        end
        trace_path_back(temp)
    end

    def trace_path_back(node)
        path = []
        until node.parent.nil?
            path.unshift(node.value)
            node = node.parent
        end
        path.unshift(root_node.value)
        path
    end

end

k = KnightPathFinder.new([0,0])
p k.root_node
# p k.find_path([5,7])
# p k.new_move_positions([3,3])
# p k.new_move_positions([1,2])

#                ______[0,0]_______
#              /                   \
#        ___[1,2]_                 [2,1] 
#      /     |    \               |    \ 
# [2, 4] [3, 3] [3, 1]       [1, 3]   [4, 2]