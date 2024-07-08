const API_URL = "https://6676a369145714a1bd7257ee.mockapi.io/users"

const constructTable = (data)=>{
let utbody = document.getElementById("user-table-body")
utbody.innerHTML=''
data.forEach(e=>{
    let tr = document.createElement("tr")
    tr.innerHTML =`
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.gender}</td>
    <td>${e.mobile}</td>
    <td>
     <button class="btn btn-primary"><a href='./edit.html?id=${e.id}' class="link">Edit</a></button>
     <button class="btn btn-danger" onclick="deleteuser(${e.id})">Delete</button>
    </td>
    `
    utbody.appendChild(tr)
})

}

async function getData()
{
    try{
        let res = await fetch(API_URL,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        let data = await res.json()
        constructTable(data)
            

    } catch(error){
       console.log(error)
    }
}

getData()

async function deleteuser(id){
    try{
       let res = await fetch(`${API_URL}/${id}`,{
        method:"DELETE"
    })
   console.log(res.status)
   getData()

    }catch(error){
      console.log(error)
    }
}
