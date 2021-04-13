class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    out = 0
    self.each_with_index do |ele, i|
      out += ele.hash + (i.hash / ele.hash).hash
    end
    out.hash
  end
end

class String
  def hash
    self.split("").map { |char| char.ord }.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    out = 0
    self.each do |k, v|
      out += k.hash + v.hash
    end
    out.hash
  end
end
