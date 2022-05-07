//Lấy ra các button , form thông qua DOM
const arrListNumber = [];
const form_list_number = document.getElementById("form_list_number");
const formNhap = document.getElementById("formNhap");

//Biến cho bài 1
const arr_list_number = document.getElementById("arr_list_number");
const sum_pos_number_text = document.getElementById("sum_pos_number");

// Biến cho bài 6
const formViTri1 = document.getElementById("formViTri1");
const formViTri2 = document.getElementById("formViTri2");
const form_6 = document.getElementById("form_6");

// Biến cho bài 9
const btn_9 = document.getElementById("btn_9");




// Bài làm
form_list_number.addEventListener("submit", function(e){
    e.preventDefault();
    if(!formNhap.value) return alert("Yêu cầu nhập số");
    arrListNumber.push(formNhap.value);
    arr_list_number.innerText = `Mảng đã nhập: [ ${arrListNumber} ]`;
    formNhap.value = "";
})

// Câu 1: Tổng số dương

function Cau1() {
   let sum_pos_number = 0;
   arrListNumber.forEach(item => {
       if(item >= 0 && Number.isInteger(Number(item))) sum_pos_number += parseInt(item);
   });
   sum_pos_number_text.innerText = `Tổng các số dương trong mảng = ${sum_pos_number}`
}

// Câu 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
form_6.addEventListener("submit", function(e){
    e.preventDefault();
    let arr_number = arrListNumber;
    let i = formViTri1.value , j = formViTri2.value , tg ;
    console.log(arr_number);
    if(!i || !j) return alert("Phải nhập đủ 2 vị trí");
    if(!arrListNumber || arrListNumber.length === 0) return alert("Bạn chưa nhập giá trị cho mảng");
    tg = arr_number[parseInt(i)-1];
    arr_number[parseInt(i)-1] = arr_number[parseInt(j)-1];
    arr_number[parseInt(j)-1] = tg;
    document.getElementById("new_arr_text").innerText = `Mảng mới: ${arr_number}`;
})


// Câu 9: Nhập thêm 1 mảng số thực tìm xem trong mảng có bao nhiêu số nguyên
function cau9(){
    let count_pos = 0;
    if(!arrListNumber || arrListNumber.length === 0) return alert("Bạn chưa nhập giá trị cho mảng");
    arrListNumber.forEach(item => {
        if(Number.isInteger(Number(item))) count_pos++;
    });
    document.getElementById("count_number_pos_text").innerText = `Tổng số nguyên trong mảng là ${count_pos}`;
}
