const sumArray = (data) => {
    let resultDataArray = 0;
    if(data.length > 0) {
        for(let i=0; i < data.length; i++){
            resultDataArray += data[i]
         }
      return resultDataArray;
    }else {
        console.log('data 0')
        resultDataArray = []
        return []
    }
 
}

const dataSumArray1 = sumArray([1,2,3,4,5]);
const dataSumArray2 = sumArray([1,2]);
const dataSumArray3 = sumArray([5])
const dataSumArray4 = sumArray([])


console.log(dataSumArray1, 'ini data sum array 1')
console.log(dataSumArray2, 'ini data sum array 2 ')
console.log(dataSumArray3, 'ini data sum array 3')
console.log(dataSumArray4, 'ini data sum array 4')