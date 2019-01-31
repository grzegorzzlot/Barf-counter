export class SumIngredients {
    constructor(data) {
        this.data = data;
    }
    getSum() {
        let arrayOfItems = []
        let keys = []
        for(let key in this.data[0]) {
            keys.push(key)
        } 
        keys.map(i=>{
            let arr = []
            this.data.forEach(element => {
                for(let key in element) {
                    if(i===key) {
                        arr.push(element[key])
                    }
                }                
            });
            let arraySum = arr.reduce(this.sumArray)
            var obj = {};
            obj[i] = arraySum;
            arrayOfItems.push(obj)
        })
        let result={}
        arrayOfItems.forEach(element => {
            Object.assign(result, element)    
        });
        // return arrayOfItems;
        return result;
    }
    sumArray(total, num) {
        return total + num;
    }
}