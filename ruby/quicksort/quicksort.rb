def quick_sort (input_array)
  quick_sort_helper(input_array, 0, input_array.length - 1)
  return input_array
end

def quick_sort_helper (input_array, start_index, end_index)
  if (start_index >= end_index)
    return
  end

  piviot_index = start_index
  left_index = start_index + 1
  right_index = end_index

  while right_index >= left_index
    if input_array[left_index] > input_array[piviot_index] && input_array[right_index] < input_array[piviot_index]
      swap(left_index, right_index, input_array)
    end
    if input_array[left_index] <= input_array[piviot_index]
      left_index += 1
    end
    if input_array[right_index] >= input_array[piviot_index]
      right_index -= 1
    end
  end

  swap(piviot_index, right_index, input_array)

  left_subarray_is_smaller = right_index - 1 - start_index < end_index - (right_index + 1)

  if left_subarray_is_smaller
    quick_sort_helper(input_array, start_index, right_index - 1)
    quick_sort_helper(input_array, right_index + 1, end_index)
  else
    quick_sort_helper(input_array, right_index + 1, end_index)
    quick_sort_helper(input_array, start_index, right_index - 1)
  end
end

def swap (i, j, input_array)
  temp = input_array[j]
  input_array[j] = input_array[i]
  input_array[i] = temp
end

p quick_sort([1, 4, 10, 111, 129, -1])