/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i,
        j,
        h={},
        results=[];
    for(i=0;i<nums.length;i++){
        j=target-nums[i];
        if(h[''+j]!==undefined){
            results.push(h[''+j],i);
            break;
        }else{
            h[''+nums[i]]=i;
        }
    }
    return results;
};
