const welcome_section=document.getElementById("welcome_section");

let staff_profile=[
    {
        hostel_name:"Hostel Name",
        img:"1.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia corrupti ducimus odio? Facere corporis exercitationem quaerat? Veritatis aliquid in voluptates nobis expedita hic sapiente, adipisci provident aliquam officia iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, provident consequatur maiores delectus atque eligendi ad magnam explicabo, labore quasi asperiores ut quis, quas nam esse pariatur harum fugiat. Doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Hostel Name",
        img:"2.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia corrupti ducimus odio? Facere corporis exercitationem quaerat? Veritatis aliquid in voluptates nobis expedita hic sapiente, adipisci provident aliquam officia iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, provident consequatur maiores delectus atque eligendi ad magnam explicabo, labore quasi asperiores ut quis, quas nam esse pariatur harum fugiat. Doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        mobile:"9876543210",
        email:"name@gmail.com"
    },
    {
        hostel_name:"Hostel Name",
        img:"3.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia corrupti ducimus odio? Facere corporis exercitationem quaerat? Veritatis aliquid in voluptates nobis expedita hic sapiente, adipisci provident aliquam officia iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, provident consequatur maiores delectus atque eligendi ad magnam explicabo, labore quasi asperiores ut quis, quas nam esse pariatur harum fugiat. Doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        mobile:"9876543210",
        email:"name@gmail.com"
    }
]


staff_profile.map((data,index)=>{
    if(index%2===0){
         welcome_section.innerHTML+=`<div class="welcome-content">
                <div class="welcome-image">
                    <img src="assets/images/hostel/${data.img}" alt="Dr. P. Madhusoodhanan">
                </div>
                <div class="welcome-text">
                    <h2>${data.hostel_name}</h2>
                    <p>${data.content}</p>
                    
                    <p><b>Email: </b> ${data.email}</p>
                    <p><b>Phone: </b> ${data.mobile}</p>
                </div>
            </div>`
    }
    else{
         welcome_section.innerHTML+=` <div class="welcome-content">
                <div class="welcome-text text-left">
                    <h2>${data.hostel_name}</h2>
                    <p>${data.content}</p>
                    
                    <p><b>Email: </b> ${data.email}</p>
                    <p><b>Phone: </b> ${data.mobile}</p>
                </div>
                <div class="welcome-image">
                    <img src="assets/images/hostel/${data.img}" alt="Dr. P. Madhusoodhanan">
                </div>
            </div>`
    }
   
})