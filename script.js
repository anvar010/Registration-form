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