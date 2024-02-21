function fetchdata() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            let a = "This is the feched data";
            resolve(a);
        },2000);
    });
}
       


    


fetchdata().then((a)=> {
    console.log('fetch data:', a);

})