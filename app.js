// function payment(){
//     let name1=document.getElementById("name1")
//     let name2=document.getElementById("name2")
//     let name3=document.getElementById("name3")
//     let name4=document.getElementById("name4")
//     let name5=document.getElementById("name5")
//     let name6=document.getElementById("name6")
//     let name7=document.getElementById("name7")
//     let name8=document.getElementById("name8")
//     let result="Name: "+name1.value + "<br>" +
//                 "Phone: "+name2.value +"<br>" +
//                 "Email: "+name3.value +"<br>" +
//                 "Place: "+name4.value +"<br>";
//     let Total= parseInt(name5.value)+parseInt(name6.value)+parseInt(name7.value);
//         result+="Total Amount Is: "+Total + "<br>";
//         let GST=Total+Math.round((Total*18/100))+"/-";
//         result+="Total bill payment with 18% GST is: "+GST;
//         document.getElementById("paymentdetails").innerHTML=result;
   
// }

function payment() {
    let Name = document.getElementById("Name").value;
    let Phone = document.getElementById("Phone").value;
    let Email = document.getElementById("Email").value;
    let Place = document.getElementById("Place").value;
    let Biryani = document.getElementById("Biryani").value;
    let Chicken = document.getElementById("Chicken").value;
    let Staters = document.getElementById("Staters").value;
    let GST = document.getElementById("GST").value;
   
    let arr1 = [parseInt(Biryani), parseInt(Chicken), parseInt(Staters), parseInt(GST)];
    let sum = 0;
    for (let i = 0; i < arr1.length - 1; i++) {
      sum = sum + arr1[i];
    }
    GST = (sum * GST) / 100;
    let Toatal = GST + sum;
    let result =
      "Name: " +
      Name +
      "<br>" +
      "Phone: " +
      Phone +
      "<br>" +
      "Email: " +
      Email +
      "<br>" +
      "Place: " +
      Place +
      "<br>" +
      "Total amount: " +
      sum +
      "<br>" +
      "Total amount with GST 18%: " +
      Math.round(Toatal);
    document.getElementById("paymentdetails").innerHTML = result;
  }


function navSlide(){
    const nav=document.querySelector(".navbar");
    const menu=document.querySelector(".nav-links");
    const burger=document.querySelector(".burger");


    burger.addEventListener("click",()=>{
        menu.classList.toggle("nav-active");

        burger.classList.toggle("toggle");

    });
}

navSlide();





   
//   function links() {
//     const nav = document.querySelector(".navbar");
//     const home = document.querySelector(".Items");
//     const burger = document.querySelector(".burger");
//     burger.addEventListener("click", () => {
//       home.classList.toggle("nav-active");
   
//       burger.classList.toggle("toggle");
//     });
//   }
//   links();