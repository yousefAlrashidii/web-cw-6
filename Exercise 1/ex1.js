// Demo 6 1

function travel(x = "زمردة") {
  console.log("اود السفر الى كوكب  " + x);
}

let planet = prompt("اسم الكوكب الذي تود السفر اليه");

travel(planet); // استدعاء الدالة من خلال الكود
travel(); //اختبار المعامل الافتراضي

//  الاستدعاء  الذ اتي
(function travel(x = "زمردة") {
  console.log(" اود السفر الى الكوكب  " + x);
})(planet);

(function travel(x = "زمردة") {
  console.log("اود السفر الى كوكب" + x);
});
