## etdiyim arastirmalar 23.06.2021 
#### Difference between var, let, const


-Javascriptdə var, let və ya const açar sözlərindən istifadə edərək dəyişənləri təyin etmək olar.
var a=10;
let b=20;
const PI=3.14;
### "Var" Açar söz
var: “var” açar sözü ilə müəyyən edilmiş bir dəyişənin əhatə dairəsi, daxilində müəyyən edilmiş “funksiya” ilə məhdudlaşır. Hər hansı bir funksiyanın xaricində müəyyən edilirsə, dəyişənin əhatə dairəsi qlobaldır.
var “funksiyası əhatə olunur”.
### "Left" Açar söz
let: “let” və ya “const” açar sözü ilə təyin olunan dəyişənin əhatə dairəsi, qıvrım mötərizə ilə təyin olunan “blok” ilə məhdudlaşır, yəni {}.
“Let” və “const” “blok miqyaslıdır”.
const: “const” açar sözü ilə təyin olunan dəyişənin əhatə dairəsi qıvrım aşırma ilə müəyyən edilmiş blokla məhdudlaşır. Lakin bir dəyişən söz açarı ilə müəyyən edilirsə, yenidən təyin edilə bilməz.
“Const” yeni bir dəyərə yenidən təyin edilə bilməz. Lakin mutasiya edilə bilər.
### "Const" açar söz
Const açar sözündən istifadə edərək bir dəyişən təyin olunursa, əhatə dairəsi blok əhatəsi ilə məhdudlaşır. Bundan əlavə, dəyişən başqa bir dəyərə təyin edilə bilməz.

{
 const PI=3.14;
 console.log(PI);
} //block 1
{
  console.log(PI);
} //block 2
/* Since we are using "const PI=3.14", scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */

Const-un dəyərin sabit və dəyişməz olduğu mənasını vermədiyini anlamaq vacibdir. Bu, bir çox Javascript inkişaf etdiricisi arasında yayılmış bir anlaşılmazlıqdır və səhv olaraq const açar sözü ilə təyin olunan bir dəyərin dəyişməz olduğunu (yəni dəyişdirilə bilməz) qeyd etdilər.
Aşağıdakı nümunədə const açar sözündə müəyyən edilmiş dəyişənin dəyərinin dəyişkən olduğunu göstərə bilərik, yəni dəyişdirilə bilər.


{
 const a = [1,2,3];
 const b = {name: "hello"};
 a.push(4,5);     //mutating the value of constant "a"
 b.name="World";  //mutating the value of constant "b"
 
 console.log(a); //this will show [1,2,3,4,5]
 console.log(b); //this will show {name: "World"}
 
}
/* This code will run without any errors, and shows that we CAN mutate the values that are defined by "const" */

Bununla yanaşı, const tərəfindən təyin olunan bu dəyişənlərin yenidən təyin edilə bilməyəcəyini unutmayın.

{
 const name = "Mike";
 const PI = 3.14; 
 const a = [1,2,3];
 const b = {name: "hello"};
 
 name="Joe"; 
// "ad" ı başqa bir dəyərə yenidən təyin etməyə çalışdığımızdan bu, səhv buraxacaq.
 PI = PI + 1; 
// "PI" ı başqa bir dəyərə yenidən təyin etməyə çalışdığımızdan bu, səhv buraxacaq.
 a = [1,2,3,4,5];
// "a" ı başqa bir dəyərə yenidən təyin etməyə çalışdığımızdan bu, səhv buraxacaq. 
b = {name: "hello"};
// "B" ı başqa bir dəyərə yenidən təyin etməyə çalışdığımızdan bu, səhv buraxacaq.
}



# Demo arastirma movzulari

### Araşdırma detalları