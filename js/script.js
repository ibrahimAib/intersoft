
var tech_Name_ar = localStorage.getItem('techNameAr');
var tech_Name_en = localStorage.getItem('techNameEn');

document.getElementById('techNameAr').value = tech_Name_ar;
document.getElementById('techNameEn').value = tech_Name_en;
function techName(){
    localStorage.setItem("techNameAr", document.getElementById('techNameAr').value);
    localStorage.setItem("techNameEn", document.getElementById('techNameEn').value);

}
let bank_en = 'Neoleap';
let bank_ar = 'نيوليب';
function bancode(e) {
    switch (e) {
        default:
            alert('اختر البنك')
            error();
            break;
        case '1':
            var bank_en = 'Neoleap';
            var bank_ar = 'نيوليب';
            break;
        // -----------------------------------------------------
        case '2':
            var bank_en = 'Saudi National Bank';
            var bank_ar = 'لبنك الأهلي';
            break;
        // -----------------------------------------------------
        case '3':
            var bank_en = 'foodics';
            var bank_ar = 'فودكس';
        break;
        // -----------------------------------------------------
        case '4':
            var bank_en = 'Arab Bank';
            var bank_ar = 'لبنك العربي';
            break;
        // -----------------------------------------------------
        case '5':
            var bank_en = 'Riyad Bank';
            var bank_ar = 'بنك الرياض';
            break;
            // -----------------------------------------------------
        case '6':
            var bank_en = 'Banque Saudi Fransi';
            var bank_ar = 'لبنك السعودي الفرنسي';
            break;
        // -----------------------------------------------------
        case '7':
            var bank_en = 'Samba Bank';
            var bank_ar = 'بنك سامبا';
            break;
        // -----------------------------------------------------
        case '8':
            var bank_en = 'SABB Bank';
            var bank_ar = 'بنك ساب';
            break;
        // -----------------------------------------------------

    }
    return [bank_ar, bank_en];
}

function base(ticket_ar, ticket_en, line1_ar = 'ارسل الموقع واوقات العمل', line1_en = 'Could you please send the location and working hours?') {
    techName()
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('bank').value;
    let tech_Name_value_ar = document.getElementById('techNameAr').value;
    let tech_Name_value_en = document.getElementById('techNameEn').value;

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];

    let great_ar = "السلام عليكم ورحمة الله وبركاتة";
    let interduce1_ar = "معك ";
    let interduce2_ar = " من انترسوفت الدعم الفني ل";
    let thank_ar = 'شكراً لك..';
    let newline = '%0a';
    
    let great_en = "Hello";
    let interduce1_en = "This is ";
    let interduce2_en = " from Intersoft, %0atechnical support for ";
    let thank_en = 'Thank you.';

    let message_ar = great_ar + newline + newline + interduce1_ar + tech_Name_value_ar + interduce2_ar + bank_ar + newline + newline + ticket_ar + newline + line1_ar + newline + newline + thank_ar;
    let message_en = great_en + newline + newline + interduce1_en + tech_Name_value_en + interduce2_en + bank_en + newline + newline + ticket_en + newline + line1_en + newline + newline + thank_en;


    var spliter = "%0a--------------------------------%0a%0a"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};

function peper() {
    base('بخصوص توصيل ورق نقاط البيع', 'Regarding the delivery of POS paper,')
};

function installation() {
    base('بخصوص تركيب جهاز نقاط البيع ""مدى""', 'Regarding the installation of the POS device,', 'ممكن ترسل الموقع وصورة من السجل التجاري واوقات العمل ','can you send the location , Customer CR and work hours.')
};



function maintenance() {
    base('بخصوص صيانة نقاط البيع', 'Regarding POS maintenance,')
};

function pullout() {
    base('بخصوص الغاء نقاط البيع', 'Regarding POS cancellation,')
};
