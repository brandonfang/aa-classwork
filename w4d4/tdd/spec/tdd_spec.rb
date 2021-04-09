require "tdd"

describe "#remove_dups" do
  it "should not change array if no duplicates present" do
    expect([].remove_dups).to eq([])
    expect([1].remove_dups).to eq([1])
    expect([1,2,3,4]).to eq([1,2,3,4])
  end
  it "should remove one duplicate" do
    expect([1,1,2,3].remove_dups).to eq([2,3])
  end
  it "should remove multiple duplicates" do
    expect([1,1,2,3,3,4].remove_dups).to eq([2,4])
  end
end

describe "#two_sum" do
  it "should return all pairs of positions where elements at positions sum to 0" do
    expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    expect([13, 2, 3, 0].two_sum).to eq([])
  end

  it "should sort smaller index before larger index in each pair, and sort pairs dictionary-wise" do
    expect([1, 0, 2, -2, -1].two_sum).to eq([[0, 4], [2, 3]])
    expect([3, -3, 0, 1, 0].two_sum).to eq([[0, 1],[2, 4]])
  end

  describe "#my_transpose" do 
    it "should transpose the elements of a square array" do
      arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8] 
      ]
      arr_transposed = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ]
      expect(arr.my_transpose).to eq(arr_transposed)
    end

    it "should work on an empty array and array of length 1" do
      expect([].my_transpose).to eq([])
      expect([1].my_transpose).to eq([1])
    end
  end

  describe "#stock_picker" do 
    let(:prices1) { [13, 11, 20, 8, 34, 24, 18] }
    let(:prices2) { [34, 13, 11, 20, 8, 34, 24, 18] }
    let(:prices3) { [39, 11, 20, 8, 34, 24, 38, 18] }
    let(:prices4) { [39, 6, 11, 20, 8, 34, 24, 38, 18] }

    it "should return the most profitable pair of days as an array of length 2" do
      expect(stock_picker(prices1)).to eq([3, 4])
      expect(stock_picker(prices2)).to eq([4, 5])
      expect(stock_picker(prices3)).to eq([3, 6])
      expect(stock_picker(prices4)).to eq([1, 7])
    end

    it "should check that the input is an array of at least length 2" do
      expect { stock_picker("a") }.to raise_error(StandardError)
      expect { stock_picker(5) }.to raise_error(StandardError)
      expect { stock_picker(true) }.to raise_error(StandardError)
      expect { stock_picker([]) }.to raise_error(StandardError)
      expect { stock_picker([3]) }.to raise_error(StandardError)
      expect { stock_picker([3,4]) }.to_not raise_error
      expect { stock_picker(prices1) }.to_not raise_error
    end
  end

  

end