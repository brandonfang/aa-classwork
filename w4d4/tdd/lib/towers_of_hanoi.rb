class TowersOfHanoi
  attr_reader :discs
  def initialize(n=3)
    @discs = Array.new(3) { Array.new}
    @discs[0] = (1..n).to_a.reverse
    @n = n
  end

  def move(a,b)
    if valid_move?(a,b)
      disc = @discs[a].pop
      @discs[b].push(disc)
    else
      raise
    end
    return @discs
  end

  def valid_move?(a,b)
    return false if discs[a].empty?
    return false if !a.is_a?(Integer) || !b.is_a?(Integer)
    return false if !(1..3).cover?(a) || !(1..3).cover?(b)
    return false if discs[a].last > discs[b].last
    true
  end

  def won?
    return true if (discs[0].empty? && discs[1].empty?) && discs[2].length == n
    false
  end
end