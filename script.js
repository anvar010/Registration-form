let myForm = document.getElementById('myForm');
console.log("Form : ",myForm);

var datas = {};
let arr = []

myForm.addEventListener('submit', function(e){
    e.preventDefault(); //stops default behaviour of form

    let email =document.getElementById('email');
    let email_value = email.value;
    console.log("email : ",email_value)

    let password =document.getElementById('password');
    let password_value = password.value;
    console.log("password : ",password_value)

    datas.email = email_value;
    datas.password = password_value;

    // console.log("Datas : ",datas)

    handleDatas(datas);



});

function handleDatas(datas){
    console.log("Datas : ",datas)
    let message = document.getElementById('message')

    //Validation

    if (arr.length>0){

        for(let i=0;i<arr.length;i++){
            if(arr[i].email==datas.email){
                message.innerHTML="Email already found";
                return;
            }
        }
    }
    arr.push(datas);
    message.innerHTML = "Sucsess";
    console.log("arr : ",arr)
}

{let arr=[
    {
        name:'renjith',
        mark : 40,
        place : 'kochi'

    },
    {
        name:'rahul',
        mark : 80,
        place : 'ernakulam'
    }
];
console.log("arr : ",arr);

//Array Functions

//foreach()
console.log("foreach - >");

arr.forEach((item,index)=>{
     console.log(`item-$(index) : `,item);
   
});



//find

console.log("Find ->")

const x =arr.find((item)=>{
    return item.name =="renjith";

});

console.log("x : ",x);

//Filter
console.log("Filter ->");

const arr1=arr.filter((item,index)=>{
    return item.mark == 40 ; 
});
console.log("arr1 : ",arr1);

//Map
console.log("Map ->");

const arr2=arr.map((item)=>{
    return item.name;

});  //returns an array of same length

console.log("arr2 : ",arr2);

//Reduce

const value=arr.reduce((total,item)=>{
    console.log("total : ",total);
    console.log("item : ",item);
    return total + item.mark;
},0);//0 is the initial value of total

console.log("value : ",value)


}

{
    let arr =[1,3,4,6,7]
    
    let sum = 0;
function sqrSum(arr){

    arr.forEach((item,index)=>{

        sum+=item*item
   
    })
   
    console.log("Sum of squares of the array : ",sum)

    }

sqrSum(arr)

//find first even number

function findEvenNum(arr){
    let evenNum =arr.find((element)=>{
        return element%2==0
    });
    return evenNum;
}
let firstEvenNumber = findEvenNum([1,2,3,4]);
console.log("firsteven Number  : ",firstEvenNumber)




//const x = arr.find(item => item % 2 == 0);

//console.log("The first even number is:", x);


//Filter all even numbers in the array

function findAllEvenNum(arr){
    let evenNumsArr =arr.filter((element,index)=>{
        return element%2==0;

    });

  return evenNumsArr
}
let allEvenNumbers = findAllEvenNum([1,2,3,4,5,6])
console.log("All even numbers : ",allEvenNumbers)

//const arr1 =arr.filter(item =>item%2==0)

//console.log("Even numbers in the array is : ",arr1)

//Double each elements in an array using map

function double(arr){
    let doubledArr=arr.map((element)=>{
        return element*2;
    });
    return doubledArr;

}
let doubledNumbers = double([10,20,30,40,50])
console.log("Doubled numbers : ",doubledNumbers);


//Write a function "productpositive " that  takes an array of numbers as input and uses the 'reduce' method to calculate the product of all positive numbers in an array

function productPositive(arr){
    const prod =arr.reduce((prod,element)=>{
        if(element>0){
            return prod = prod * element ;

        }else{
            return prod;

        }
    },1);
    return prod;
}

let product = productPositive([-1,-2,-3,3,2]);
console.log("product : ",product);

}




