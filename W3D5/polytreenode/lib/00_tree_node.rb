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




end