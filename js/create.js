const API_URL = "https://6676a369145714a1bd7257ee.mockapi.io/users"
let myForm = document.forms["CreateForm"]

myForm.addEventListener('submit', async(e)=>{
    e.preventDefault()
    try {
        let data = {
            name: myForm.name.value,
            email:myForm.email.value,
            mobile:myForm.mobile.value,
            gender:myForm.gender.value,
            dob:myForm.DOB.value,
            address:{
                addressLine:myForm.addressLine.value,
                city:myForm.city.value,
                state:myForm.state.value,
                zipcode:myForm.zipcode.value
            }
        }
       let res = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
       })
       if(res.status===201){
        window.location.href = '/'
       }
    } catch (error) {
        console.log(error)
    }
})