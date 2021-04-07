module Slideable
    HORIZONTAL_DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]] 
    DIAGONAL_DIRS = [[1, 1], [1, -1], [-1, 1], [-1, -1]]

    def horizontal_dirs
        HORIZONTAL_DIRS
    end
    
    def diagonal_dirs
        DIAGONAL_DIRS
    end
    
    def moves
        move_dirs.map { |dir| grow_unblocked_moves_in_dir(dir) }
    end 

    private
    def move_dirs
        self.move_dirs
    end

    def grow_unblocked_moves_in_dir(dir) 
        moves_in_dir = [] 
        dx, dy = dir
        test_pos = [self.pos[0] + dx, self.pos[1] + dy]
        while @rows[test_pos].empty? && covered?(test_pos)
            moves_in_dir << test_pos
            test_pos[0] += dx
            test_pos[1] += dy
        end
        moves_in_dir
    end

    def covered?(pos)
        (0..7).cover?(pos[0]) && (0..7).cover?(pos[1])
    end
end

# class Dir < Struct.new(:X, :Y)
# end