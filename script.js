let Upiid = 123456789;
 let Number = document.getElementById("Number");
 let upi = document.getElementById("upi")
 let img= document.getElementById("img");

 function check(){
    let promise = new Promise((resolve, reject) => {
        if(Upiid==upi.value){
            resolve("completed");
        }else{
            reject("rejected");
        }
    });
    // console.log(promise)
    promise
    .then(function(resolve){
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5_ETHVxM3fEiZsooUgl_bgKJFOMCFoiTBQ&s"
    })
    .catch(function(reject){
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGYs5huqLbSGd8he2S3nb4z86BnTKDJqojA&s"

    });

 }


 function MakePayment(){
    setTimeout(check,2000)
 }