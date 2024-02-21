// function username(){
//     return new Promise(function(resolve, reject)
//     {
//         setTimeout(() => {
//             // const nee = console.log("hey there")
//             resolve({syanttax : "hello"})
            
//         }, 2000);
//     })
// }


// username().then((hatt) => {
//     console.log("the resolve value is : ", hatt);
// })

// function getUsername() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const nee = "hey there";
//             console.log(nee);
//             resolve(nee);
//         }, 2000);
//     });
// }

// getUsername().then((nee) => {
//     // You can handle the resolved value here, if needed
//     console.log("Resolved value:", nee);
// }).catch((error) => {
//     // Handle any errors that might occur during the promise execution
//     console.error("Error:", error);
// });


const promisee = new Promise(function(resolve, reject){
     setTimeout(() => {
        const Error = false
        if(!Error){
        resolve({username : "jatin arya",  age : "19"})
        }
        else
        {
        reject("errror : JS not found")
        }
        
     }, 2000);
    })

promisee
    .then((username) => {
    console.log("resolved is here", username);
})
    .catch((error) =>{
    console.error("ana de:  ", error)
});

