class InvalidMove < StandardError
    def message
      "Piece not moved. Invalid position given."
    end
  end