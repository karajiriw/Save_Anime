/* const ep = document.querySelectorAll(".ep");
const veiwh2 = document.querySelectorAll(".veiw");

let veiws = [];

for (let i = 0 ; i < ep.length ; i++) {
    veiws.push(0);
}

for (let i = 0 ; i < ep.length ; i++) {
    ep[i].addEventListener("click",(event) => {
        if (event.target.className == "add") {
            veiws[i] += 1;
            veiwh2[i].innerHTML = veiws[i];
        }
        else if (event.target.className == "sub") {
            veiws[i] -= 1;
            veiwh2[i].innerHTML = veiws[i];
        }
    });
} */

const ep = document.querySelectorAll(".ep");
const veiwh2 = document.querySelectorAll(".veiw");

let veiws = [];

for (let i = 0; i < ep.length; i++) {
    // ตรวจสอบว่ามีค่าที่ถูกบันทึกไว้ใน localStorage หรือไม่
    veiws[i] = parseInt(localStorage.getItem(`counter_${i}`)) || 0;

    // แสดงค่าที่ถูกบันทึกไว้ใน HTML
    veiwh2[i].innerHTML = veiws[i];
}

for (let i = 0; i < ep.length; i++) {
    ep[i].addEventListener("click", (event) => {
        if (event.target.classList.contains("add")) {
            veiws[i] += 1;
            veiwh2[i].innerHTML = veiws[i];
        } else if (event.target.classList.contains("sub")) {
            veiws[i] -= 1;
            veiwh2[i].innerHTML = veiws[i];
        }

        // บันทึกค่าใน localStorage เมื่อมีการเปลี่ยนแปลง
        localStorage.setItem(`counter_${i}`, veiws[i]);
    });
}