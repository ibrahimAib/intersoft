// function url() {
//     var num;
//     num = document.getElementById('phone').value;

//     var num1 = '+966' + num;


//     var deviceNumber = document.getElementById('device').value;
//     var bankcode = deviceNumber.slice(0, 4);

//     switch (bankcode) {
//         default:
//             alert('device number is wrong')
//             error();
//             break;
//         case '8125':
//         case '8115':

//         case '8150':
//         case '8151':
//         case '8152':
//         case '8153':
//         case '8154':
//         case '8155':
//         case '8156':
//         case '8157':
//         case '8158':
//         case '8159':

//         case '8165':
//         case '8100':
//             var bank_en = 'Al Rajhi Bank';
//             var bank_ar = 'بنك الراجحي';
//             break;
//         // -----------------------------------------------------
//         case '8123':
//             var bank_en = 'Arab Bank';
//             var bank_ar = 'بنك العربي';
//             break;
//         // -----------------------------------------------------
//         case '8124':
//             var bank_en = 'Riyad Bank';
//             var bank_ar = 'بنك الرياض';
//             break;
//         // -----------------------------------------------------
//         case '8196':
//             var bank_en = 'Saudi National Bank';
//             var bank_ar = 'بنك الأهلي';
//             break;
//         case '8166':
//             var bank_en = 'Saudi National Bank';
//             var bank_ar = 'بنك الأهلي';
//             break;
//         case '8116':
//             var bank_en = 'Saudi National Bank';
//             var bank_ar = 'بنك الأهلي';
//             break;
//         // -----------------------------------------------------
//         case '8127':
//             var bank_en = 'Banque Saudi Fransi';
//             var bank_ar = 'البنك السعودي الفرنسي';
//             break;
//         // -----------------------------------------------------
//         case '8128':
//             var bank_en = 'Samba Bank';
//             var bank_ar = 'بنك سامبا';
//             break;
//         // -----------------------------------------------------
//         case '8129':
//             var bank_en = 'SABB Bank';
//             var bank_ar = 'بنك ساب';
//             break;
//         // -----------------------------------------------------
//         case '8174':
//         case '8173':
//             var bank_en = 'Foodics';
//             var bank_ar = 'فودكس';
//             break;
//         // -----------------------------------------------------

//     }
//     var message_ar = "السلام عليكم%0aمعك إبراهيم من  " + bank_ar + "%0a%0aبخصوص توصيل أوراق جهاز الدفع 'مدى',%0aارسل موقعك وأوقات الدوام%0a%0aوشكراً";
//     var message_en = "Hello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aAbout delivery of the payment device Mada's paper,%0aSend your location and working hours%0a%0aThank you.";
//     var spliter = "%0a--------------------------------%0a"
//     window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);



// };

// var inputD = document.getElementById("device");
// var inputP = document.getElementById("phone");


// // Execute a function when the user releases a key on the keyboard
// inputD.addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//     }
// });
// inputP.addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//     }
// });