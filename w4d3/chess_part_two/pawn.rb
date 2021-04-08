require_relative "piece.rb"

class Pawn < Piece 

    # def initialize
    #     super()
    # end

    def symbol
        :P
    end
     
    def moves
        poss_moves = []
        # directions = forward_steps + side_attacks
       
        forward_steps.each do |dir|
            dx, dy = dir 
            test_pos = [self.pos[0]+dx, self.pos[1]+dy]

            if covered?(test_pos) && @rows[test_pos].empty?
                poss_moves << test_pos
            end
        end

        side_attacks.each do |dir|
            dx, dy = dir 
            test_pos = [self.pos[0]+dx, self.pos[1]+dy]
            if covered?(test_pos) && (@rows[test_pos].color != self.color && @rows[test_pos] != null_piece)
                poss_moves << test_pos
            end
        end

        poss_moves
    end 


    private 

    def curr_color_white
        self.color == :white
    end

    def at_start_row?
        curr_color_white ? self.pos[0] == 6 : self.pos[0] == 1
    end

    def forward_dir
        #logic to determine white is -1 direction and black is +1 direction
        curr_color_white ? -1 : 1 
    end

    def forward_steps 
        
        if curr_color_white
           return [[-1, 0], [-2,0]] if at_start_row?
           return [[-1, 0]]
        else
            return [[1, 0], [2,0]] if at_start_row?
            return [[1, 0]]
        end
    end 
       
    

    def side_attacks # a pawn can attack diag if there is another pawn there
        if curr_color_white
            return [[-1, -1], [-1, 1]] 
         else
             return [[1, 1], [1, -1]] 
         end
    end

    def covered?(pos)
        (0..7).cover?(pos[0]) && (0..7).cover?(pos[1])
    end

end