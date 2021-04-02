class KnightPathFinder

    def initialize(position)
        @position = position
        @x = position[0]
        @y = position[1]
        @considered_positions = [@position]
        # @root_node = 
    end

    def self.valid_moves(position)
        moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1]. [-2, 1], [-2, -1]]
        answer = []
        moves.each do |move|
            x, y = position
            new_position = [(x + move[0]), (y + move[1])]
            next if new_position.all? { |num| num <= 0 && num >= 7 }
            answer << new_position
        end
        answer
    end

    def new_move_positions(position)
    end

end