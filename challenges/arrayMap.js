function hasNumbersWithSum(arr, target){
    let start_index = 0;
    let current_sum = 0;

    for(let end_index = 0; end_index <arr.length; end_index++){
        current_sum += arr[end_index];

        while(current_sum > target && start_index <= end_index){
            current_sum -= arr[start_index];
            start_index++;
        }

        if(current_sum === target){
            return true;
        }
    }
    return false
}
    const arr = [4, 2, 7, 1, 9, 5];
    const target = 17;
    console.log(hasNumbersWithSum(arr, target));
