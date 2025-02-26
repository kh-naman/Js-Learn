const arr = [1,2,3,4,5,6,7]
//Aim: want to access arr[-1]

const handler = {
    get(target,index)
    {
        index = Number(index)
        if(index < 0)
        {
            return target[target.length+index]
        }
        return target[index];
    },
    set(target,prop,value){
        const index = Number(prop);
        if(index < 0)
        {
            target[target.length+index] = value;
            return;
        }
        target[index] = value;
        return;
    }
    
}
const arrayProxy = new Proxy(arr,handler)
console.log(arrayProxy[-2]);
arrayProxy[1]=20;
arrayProxy[-2]=30
console.log(arr);
