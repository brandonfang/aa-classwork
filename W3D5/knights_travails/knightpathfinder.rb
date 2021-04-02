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
        start_pos = @position
        queue = [start]
        
    end

end

# k = KnightPathFinder.new([0,0])
# p k.new_move_positions([0,0])