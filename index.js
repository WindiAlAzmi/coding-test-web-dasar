const sumArray = (data) => {
    let resultDataArray = 0;
    for(let i=0; i < data.length; i++){
       resultDataArray += data[i]
    }

    if(resultDataArray > 0) {
        console.log('lebih dari 0')
    }else {
        console.log('0')
    }

}

const dataSumArray1 = sumArray([1,2,3,4,5]);
const dataSumArray2 = sumArray([1,2]);
const dataSumArray3 = sumArray([5])
const dataSumArray4 = sumArray([])
