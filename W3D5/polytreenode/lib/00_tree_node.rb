class PolyTreeNode
	attr_reader :parent, :children, :value

	def initialize(value)
		@value = value
		@parent = nil
		@children = []
	end

	def parent=(new_parent)
		return if @parent == new_parent
		if @parent.nil?
			@parent = new_parent
			@parent.children << self
		elsif new_parent.nil?
			@parent.children.delete(self)
			@parent = new_parent
		else 
			@parent.children.delete(self)
			@parent = new_parent
			@parent.children << self
		end


	end

	def inspect
		@value.inspect
	end

	def add_child(child_node)
		child_node.parent = self
	end

	def remove_child(child_node)
		raise "not a child" if child_node.parent != self
		child_node.parent = nil
	end

	def dfs(target_val)
		return self if self.value == target_val
		self.children.each do |child|
			# p child
			next if child.children.empty?
			temp = child.dfs(target_val)
		end
		temp
	end



end

a = PolyTreeNode.new(:A) #root
b = PolyTreeNode.new(:B) #no children
c = PolyTreeNode.new(:C) #two children
d = PolyTreeNode.new(:D) #leaf node
e = PolyTreeNode.new(:E) #leaf node

c.add_child(e)
c.add_child(d)
a.add_child(b)
a.add_child(c)

# p a
# p a.children
puts 'there should be something below me'
p a.dfs(:E)