def first_anagram?(str1, str2)
    perms = str1.split("").permutation.to_a
    str_perms = perms.map { |ele| ele.join("") }
    str_perms.include?(str2)
end
# time complexity is O(n!)

def second_anagram?(str1, str2)
    arr1, arr2 = str1.split(""), str2.split("")
    arr1.each do |ele|
        j = arr2.index(ele)
        return false if j.nil?
        arr2.delete_at(j)
    end
    arr2.empty?
end
# time complexity is O(n^2)

def third_anagram?(str1, str2)
    str1.split("").sort == str2.split("").sort
end
# time complexity depends on which sorting algorithm we use
# worst case for quicksort is O(n^2)
# worst case for mergesort is O(n*log(n))

def fourth_anagram_1?(str1, str2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)
    str1.each_char { |char| hash1[char] += 1 }
    str2.each_char { |char| hash2[char] += 1 }
    hash1 == hash2
end
# time complexity is O(n)

def fourth_anagram_2?(str1, str2)
    hash = Hash.new(0)
    str1.each_char { |char| hash[char] += 1 }
    str2.each_char { |char| hash[char] -= 1 }
    !hash.any? { |k, v| v != 0 }
end
# time complexity is O(n)