const myform = document.getElementById("my_form");

myform.addEventListener("submit", onsubmit);




// window.addEventListener("DOMContentLoaded", Reloaded)
// async function Reloaded(ev) {
//     try {
//         ev.preventDefault();

//         let GetData = await axios.get("http://localhost:8000/get-user")
//         // console.log(GetData.data.product);
//         for (var i = 0; i < GetData.data.product.length; i++) {
//             DisplayOnScreen(GetData.data.product[i]);
//         }

//     } catch {
//         console.log("Dom Loaded is Failed")

//     }


// }

async function onsubmit(event) {
    try {
        event.preventDefault();

        let myName = document.getElementById("my_name");
        let myPhone = document.getElementById("my_phone");
        let myEmial = document.getElementById("my_email");

        let obj = {
            Name: myName.value,
            Phone: myPhone.value,
            Email: myEmial.value
        }
        //   console.log(obj);
        const response = await axios.post("http://localhost:8000/add-user", obj)
        // console.log(response.data.newUser);
        DisplayOnScreen(response.data.newUser);
    } catch {
        console.log("onsubmit Error")
    }

    document.getElementById("my_name").value = "";
    document.getElementById("my_phone").value = "";
    document.getElementById("my_email").value = "";

}


async function DisplayOnScreen(obj) {
    try {
        var UlList = document.getElementById("Ul_List");
        var Li = document.createElement("li");

        Li.innerHTML = "Id: " + obj.id + "," + " Name:" + obj.name + " , " + " phone:  " + "," + obj.phone + "," + "    Email:" + obj.email;

        var Deletbtn = document.createElement("button");
        Deletbtn.textContent = "delet";



        let userid = obj.id;
        var Deletbtn = document.createElement("button");
        Deletbtn.textContent = "delete";
        Deletbtn.onclick = async (eve) => {
            try {
                let DeleteVlue = await axios.delete(`http://localhost:8000/delete-Product/${userid}`)
                let Id = DeleteVlue.data.deletedOrder.id
                // console.log(DeleteVlue.data.deletedOrder);
                Deletebtn = document.getElementById(Id);
                Deletebtn.remove();
                window.location.reload();
            } catch {
                console.log("Delete Error from js")
            }
            window.location.reload();
        }

        // console.log(Li);

        //Append Delettbtn inside Li
        Li.appendChild(Deletbtn);
        //Append Li inside Ullist
        UlList.appendChild(Li);
    } catch {
        console.log("Display Error");
    }
}

window.addEventListener("DOMContentLoaded", Reloaded)
async function Reloaded(ev) {
    try {
        ev.preventDefault();

        let GetData = await axios.get("http://localhost:8000/get-user")
        // console.log(GetData.data.product);
        for (var i = 0; i < GetData.data.product.length; i++) {
            DisplayOnScreen(GetData.data.product[i]);
        }

    } catch {
        console.log("Dom Loaded is Failed")

    }

}