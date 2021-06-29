// Ekranda görünən kiçik pəncərəyə modal pəncərə deyilir. 
//“Modal” o deməkdir ki, səhifədən istifadə edən şəxs bu halda səhifə ilə əlaqə qura bilməz.
// digər düymələrə basa bilməz və yalnız bu pəncərə ilə qarşılıqlı əlaqə qura bilər. Başqa sözlə, “OK” düyməsinə basılması gözlənilir.
//alert("Salam");
//let age = prompt('Kaç yaşındasın?', 100);

//alert(`Sen ${age} yaşındasın!`); // Sen 100 yaşındasın!
// Ancaq bu parametri göndərməsək, Internet Explorer "undefined"onu məlumat giriş ekranında göstərəcəkdir.İstəsəniz, aşağıdakı kodu Internet Explorer-da işə sala və görə bilərsiniz:
//let test = prompt("Test");
//let test = prompt("Test", ''); // <-- for IE
// let patron = confirm("Are you student");

// alert( student); // eğer OK'e basıldıysa `true` döner.
let cars =[{ type:"BMW", model:"500",price:4000},{ type:"Ferrari", model:"400",price:3000},{ type:"Lada", model:"100",price:1000},{ type:"Kio", model:"120",price:21000} ] ;
for (i=0; i<cars.length; i++){
    if(cars[i].model == "400") {
console.log(cars[i])
    }
}