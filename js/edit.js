const API_URL = "https://6676a369145714a1bd7257ee.mockapi.io/users"

let params = new URL(document.location).searchParams;
let id = params.get("id");



let myForm = document.forms["CreateForm"]

myForm.addEventListener('submit', async(e)=>{
    e.preventDefault()
    try {
        let data = {
            name: myForm.name.value,
            email:myForm.email.value,
            mobile:myForm.mobile.value,
            gender:myForm.gender.value,
            dob:myForm.dob.value,
            address:{
                addressLine:myForm.addressLine.value,
                city:myForm.city.value,
                state:myForm.state.value,
                zipcode:myForm.zipcode.value
            }
        }
       let res = await fetch(`${API_URL}/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
       })
       console.log(res.status)
       if(res.status==200){
        window.location.href = '/'
       }
    } catch (error) {
        console.log(error)
    }
})


async function getData(){
    try {
        let res =await fetch(`${API_URL}/${id}`,{
        method:"GET"
        })
        if(res.status==200){
            let data = await res.json()
console.log(data)
document.getElementById("email").value = data.email
document.getElementById("name").value = data.name
document.getElementById("mobile").value = data.mobile
document.getElementById("dob").value = data.dob
document.getElementById("addressLine").value = data.address.addressLine
document.getElementById("state").value = data.address.state
document.getElementById("city").value = data.address.city
document.getElementById("zipcode").value = data.address.zipcode
document.getElementById("gender").value = data.gender
          
        }
    } catch (error) {
        console.log(error)
    }
}

getData();