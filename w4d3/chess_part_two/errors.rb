class InvalidMove < StandardError
	def start_pos_message
		"Invalid position given. There is no piece at given start_pos"
	end

	def end_pos_message
		"Invalid position given. The piece cannot move to given end_pos."
	end
end