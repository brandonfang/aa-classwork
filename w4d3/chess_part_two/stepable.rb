module Stepable

    def moves
        moves = []
        move_diffs.each do |diff|
            dx, dy = diff
            test_pos = [self.pos[0] + dx, self.pos[1] + dy]
            moves << test_pos if @rows[test_pos].empty? && covered?(test_pos) 
        end
        moves
    end

    private
    def move_diffs
        self.move_diffs
    end

    def covered?(pos)
        (0..7).cover?(pos[0]) && (0..7).cover?(pos[1])
    end
end