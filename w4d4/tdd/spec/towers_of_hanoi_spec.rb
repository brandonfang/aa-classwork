require "towers_of_hanoi"

describe "TowersOfHanoi" do

  let(:towers1) {TowersOfHanoi.new(4)}
  let(:towers2) {TowersOfHanoi.new}
  let(:towers3) {TowersOfHanoi.new}
  describe "#initialize" do
    it "should initialize an array of three arrays with n elements in first array" do
      expect(towers1.discs).to eq([[4,3,2,1],[],[]])
    end
    it "should set n = 3 if no argument given" do
      expect(towers2.discs).to eq([[3,2,1],[],[]])
    end
  end

  describe "#move" do
    before(:each) do
      towers1.move(0,1)
      towers1.move(0,2)
    end
    it "should take in two numbers a,b as input" do
      expect(towers1.move(0,2)).to_not raise_error
      expect(towers1.move("2",3)).to raise_error
    end
    it "should not move anything if a,b are not on the board" do
      expect(towers1.move(-1,1)).to raise_error
    end
    it "should move the top-most disc from stack a to stack b" do
      expect(towers1.move(0,2)).to eq([[4,3,2],[],[1]])
    end
    it "should not move a larger disc onto a smaller disc" do
      expect(towers1.move(0,2)).to raise_error
    end
  end

  describe "#won?" do
     before(:each) do
      towers3.move(0,2)
      towers3.move(0,1)
      towers3.move(2,1)
      towers3.move(0,2)
      towers3.move(1,0)
      towers3.move(1,2)
      towers3.move(0,2)
    end
    context "When game is won" do
      it "should return true" do
        expect(towers3.won?).to eq(true)
      end
    end
    context "When game is not over" do
      it "should return false" do
        expect(towers1.won?).to eq(false)
      end
    end
  end
end