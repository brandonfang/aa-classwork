class Employee
  attr_reader :name, :title, :salary, :boss

  def initialize(name, title, salary, boss = nil)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee 
  attr_reader :subordinates

  def initialize(name, title, salary, boss, subordinates)
    super(name, title, salary, boss)
    @subordinates = subordinates
  end

  def bonus(multiplier)
    subordinates_salary * multiplier
  end

  def subordinates_salary
    total = 0
    self.subordinates.each_with_index do |employee, i| 
      total += employee.salary
      is_manager = defined? employee.subordinates 
      total += @subordinates[i].subordinates_salary if !is_manager.nil?
    end
    total
  end
end 