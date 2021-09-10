// let o :object
// o = {name: 'qwerty'}
// console.log('obj=>',o);

var b :{name: string};
b={name:'kk'};
// console.log('b',b);

var c :(a:number,b:number)=>number

c = (a:number,b:number)=>{
    return a+b
}

var d: [string,number,number,number]
d = ['457',2,5,87]

var e: Array<number>
e = [4,6,2457,45]


enum sex{
    male = 0,
    female = 1
}
let f: {name:string,sex:sex}
f = {name:'ui',sex:sex.male}

console.log('f :',f);



