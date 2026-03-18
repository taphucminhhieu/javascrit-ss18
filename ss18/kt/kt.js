//thẻ input
let nameInput = document.getElementById('contact-name').value.trim();
let numberInput = document.getElementById('contact-phone').value;
let emailInput = document.getElementById('contact-email').value;
let body = document.getElementById('contact-tbody');

let buttonClick = document.getElementById("button");

// const ni = [];
// let render = ()=> {

//     //khi bấm click thì sẽ cật nhập dữ liệu đã nhập vào trong màn
//     buttonClick.addEventListener("click",() => {
//         let tbodyElement = document.getElementById("contact-tbody");
//         tbodyElement.innerHTML="";
//         ni.forEach((element) => {
            
//             let tr = document.createElement("tr");
//             //them nd
//             tr.innerHTML =`
//             <td>${element.STT}</td>
//             <td>${element.name}</td>
//             <td>${element.number}</td>
//             <td>${element.email}</td>
//             <td>${element.action}</td>
//             `;
//             tbodyElement.appendChild(tr);
//         });
//         if(nameInput =="" ){
//             alert("vui lòng nhập lại tên");
//         }else if(numberInput ="") {
//             alert("số điện thoại không để trống");
//         }else if(emailInput =""){
//             alert("không được để trống");
//         }
//     });
// };

document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();

    if (nameInput === "" && nameInput ==="null") {
        alert("Họ tên không được để trống!");
        return;
    }

    if (nameInput.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
        return;
    }

    // if (nameInput) {
    //     alert("Họ tên chỉ chứa chữ cái và khoảng trắng!");
    //     return;
    // }


    let news = body.insertRow();

    news.innerHTML = `

        <td>${hoTen}</td>
        <td>${sdt}</td>
        <td>${email}</td>
        <td>
            <button class="btn-edit">Sửa</button>
            <button class="btn-delete">Xóa</button>
        </td>
    `;

};