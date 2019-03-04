import mieso from '../constants/data/mieso';
import preparaty from '../constants/data/preparaty';
import ryby from '../constants/data/ryby';
import suplementy from '../constants/data/suplementy';
import tluszcze from '../constants/data/tluszcze';
import warzywa from '../constants/data/warzywa';
import woda from '../constants/data/woda';
import jaja from '../constants/data/jaja';
import tauryna from '../constants/data/tauryna';


const privateMethods = {
    findElement(item, value, category) {
        let data;
        category.forEach(i=>{           
            if(i['Wartości żywieniowe na 100g żywności']===item) {
                const obj ={};
                for(let key in i) {
                    obj[key] = i[key]*parseInt(value)/100; //its 100 divived, cuz total amount is per 100 gram
                }
                delete obj["Wartości żywieniowe na 100g żywności"];
                delete obj["Źródło"];
                delete obj["Typ"];
                data = obj;
                return;
            }            
        });
        return data;
    },
    getSum(data) {
        let arrayOfItems = []
        let keys = []
        for(let key in data[0]) {
            keys.push(key)
        } 
        keys.map(i=>{
            let arr = []
            data.forEach(element => {
                for(let key in element) {
                    if(i===key) {
                        arr.push(element[key])
                    }
                }                
            });
            let arraySum = arr.reduce(this.sumArray)
            const obj = {};
            obj[i] = arraySum;
            arrayOfItems.push(obj)
        })
        let result={}
        arrayOfItems.forEach(element => {
            Object.assign(result, element)    
        });
        // return arrayOfItems;
        return result;
    },
    sumArray(total, num) {
        return total + num;
    }
}



export class Counter {
    constructor(data) {
        this.data = data;
    }
    sumIngredients() {
        const data = this.data.map(i=>{
            switch(i.category) {
                case 'mieso' :  return privateMethods.findElement(i.label, i.value, mieso);
                case 'preparaty' :  return privateMethods.findElement(i.label, i.value, preparaty);
                case 'ryby' : return privateMethods.findElement(i.label, i.value, ryby);
                case 'suplementy' : return privateMethods.findElement(i.label, i.value, suplementy);
                case 'tluszcze' : return privateMethods.findElement(i.label, i.value, tluszcze);
                case 'warzywa' : return privateMethods.findElement(i.label, i.value, warzywa);
                case 'woda' : return privateMethods.findElement(i.label, i.value, woda);
                case 'tauryna' : return privateMethods.findElement(i.label, i.value, tauryna);
                case 'jaja' : return privateMethods.findElement(i.label, i.value, jaja);
            }           
        });
        return privateMethods.getSum(data)
        // return data;       
    }
    sumWeight() {
        let result = 0;
        this.data.forEach(i=>{
            result+=parseInt(i.value);
        })
        return result;
    }
}



