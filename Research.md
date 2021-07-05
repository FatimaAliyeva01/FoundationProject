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

### Console in Javascript (log, error, warn,table,clear,count)

Konsol obyekt metodları
Metodun təsviri
assert () İddianın yalnış olması halında konsola bir səhv mesajı yazır
clear () konsolu təmizləyir
count () count () saymaq üçün edilən bu zəngin neçə dəfə çağırıldığını qeyd edir
error () Konsola bir səhv mesajı göndərir
group () Konsolda yeni bir sıra qrupu yaradır. Console.groupEnd () çağırılana qədər əlavə səviyyədə konsol mesajlarını izləyən bu girintilər
groupCollapsed () Konsolda yeni bir sıra qrupu yaradır. Ancaq yeni qrup çökərək yaradıldı. İstifadəçinin genişləndirmək üçün açıqlama düyməsini istifadə etməsi lazımdır
groupEnd () Konsoldakı cari satır qrupundan çıxır
info () Konsola bir məlumat mesajı verir
log () Konsola bir mesaj göndərir
table () cədvəl məlumatlarını cədvəl kimi göstərir
time () bir taymer başlayır (bir əməliyyatın nə qədər vaxt keçirdiyini izləyə bilər)
timeEnd () əvvəllər console.time () tərəfindən başlamış bir taymeri dayandırır.
trace () konsola yığın izi çıxarır
Warn () konsola xəbərdarlıq mesajı verir

## Data types in Javascript

Ən əsas beş məlumat növünə ümumi baxış
Hər bir məlumat növü və bunların nə üçün istifadə oluna biləcəyi barədə qısa icmalımızı nəzərdən keçirək. Simlər alfasayısal simvol və simvol toplusudur. Məktubları və sözləri belə saxlayacağıq. Ünvanlar kimi şeylər. Rəqəmlər səsləndikləri şeydir. Həm tam, həm də ondalık daxil olmaqla rəqəmlərdir. Kompüterlər riyazi əməliyyatları yerinə yetirmək üçün tez-tez rəqəmlərdən istifadə edəcək, eyni zamanda yalnız müəyyən bir mağazanın neçə dondurma dadına sahib olduğunu hesablamaq kimi bir rəqəm ola bilər.

Booleansların yalnız iki dəyəri ola bilər. Doğru və yalan. İşıq açarı kimi yalnız iki vəziyyətə sahib olan bütün məlumatları təmsil edirlər. Açıq və ya söndürülmüşdür. Tərif olunmamış məlumat növü dəyişənin yaradıldığı, lakin heç vaxt dəyər verilmədiyi deməkdir. Heç bir şey deyil, çünki heç kim nə qədər dəyər verməli olduğunu söyləməkdən narahat olmayıb. Null, qəsdən təyin edilməli olduğu halda, təyin olunmamışdır. Bu da boş və ya heç bir şey demək deyil, ancaq bir geliştirici bunun boş və ya heç bir şey olmadığını söylədiyi üçün belədir.

Digər iki ümumi məlumat növü: obyektlər və massivlər
Daha sonra danışacağımız digər iki ümumi məlumat növü obyektlər və massivlərdir. Bir obyekt və ya sıra kolleksiyalardır, bir çox məlumat nöqtəsini girişdən istifadə edərək keçə biləcəyimiz tək bir paket halında birləşdirmək üçün bir yoldur.

Bunlar istifadə edəcəyiniz yalnız bir neçə məlumat növüdür. Gələcəkdə hər biri üçün sintaksisin necə yazılacağını və niyə birinin üstündən birini istifadə etmək istəyə biləcəyinizi dəqiq şəkildə nəzərdən keçirəcəyik. Hələ ki, kompüterin məlumatları və məlumatları fərqli düşündüyünü unutmayın. Fərqli növləri üçün fərqli buketlər var. Bu tipləri və doğru olanları lazımi ssenarilərdə nə vaxt istifadə edəcəyimizi öyrənməliyik.

Strings, Numbers and Booleans - Ən sadə və ən ümumi məlumat növləri
Qarşılaşacağımız ən sadə və ən yaygın növlərdən bəziləri əvvəlcə simlər, sonra rəqəmlər və daha sonra buqilərdir.

Strings

Sətir alfasayısal simvolların toplusudur. İkiqat sitatlar, tək sitatlar və ya rötgörən simvol yazaraq bir simli başlayıram. İkiqat təklif və tək sitat eyni şəkildə davranır və rötuş xarakteri bəzi əlavə funksiyalarla gəlir.

Gəlin əsaslara sadiq qalaq. İkiqat sitat simimizi burada əldə etdik. "String" sözünü yazdım, lakin sitatlar əslində bir simli yaratdığımı söyləməyim lazımdır. Sonra sitatın içinə istədiyimi qoya bilərəm. "Köpək 7-11-ə qədər gəzintiyə çıxdı". Dırnaq işarələri içərisində olduğu üçün hamısının eyni rəngdə qaldığını görəcəksiniz. Bunu kopyalayıb tırnak işarələrinin xaricində yerləşdirsəm, redaktorumdakı rənglənmənin çox fərqli olduğunu görəcəksiniz. Cari sxemimdəki bu standart mavi rəng bu adla bir dəyişən axtarmağa çalışdığına görə. Bunu tapmaq deyil. Bunun heç bir mənası yoxdur. Burada 7-11 və başqa bəzi qəribə şeylər etməyə çalışdığını bilmir.

Ancaq bir dəyəri bir sətirdə, sitatlarda bükdükdə, sətir içərisində istədiyimiz hər hansı bir alfasayısal simvol qoya biləcəyimiz bir sətir yaradır. Bütün qəribə xüsusi simvollar, hərflər və rəqəmlər əlavə edə bilərik. Bütün bunlar bir simli içərisində etibarlıdır. Etibarlı olmayan tək şey başqa bir sitat işarəsidir, çünki bu ipi bitirir və indi bir eşleme olmadan təkbaşına oturub bir sitat işarəsi var.

İplərin içərisində tırnak işarələrini istifadə etməyə diqqətli olmalıyıq. Eyni tip sitat işarəsi. Eyni şeyi burada da edə bilərik, eyni qaydalar tətbiq olunur. Hər hansı bir şey onun içərisinə daxil olur və bir daha kopyalayın və yapışdırın, eyni şey geri dönənlərin içərisində də tətbiq olunur. Geri dönməyin digər simlərin dəstəkləmədiyi ən yaxşı şeylərdən biri də deyək ki, bunu həqiqətən, həqiqətən, həqiqətən çox uzun bir cümləyə çevirdim və bunun ekrandan çıxmasını istəməməyimə qərar verdim. Enter düyməsini vuracağam. Yeni bir xəttə getməliyəm. Boyama problemimiz var, bunun etibarlı olmadığını göstərmək üçün yenidən ortaya çıxdı. Yenidən JavaScript-i yalnız bir simli kimi aparmaq əvəzinə etməyə çalışırıq.

Ancaq istəsəydim, bir daha bunu kopyalayın və bu rötuşun içinə yapışdırın, bir rötuşla enter düyməsini basa bilərik və bu işləyir. Backticks giriş düyməsinə hörmət edəcək və bir simli bir çox kod sətirinə bölməyimizə imkan verəcəkdir. Şübhə yarandıqda, inkişaf etdiricilərin standart ekran bildirişləri üçün rötbardan istifadə etməsi həqiqətən yaygındır. Buna görə davam edin və bunu edin, ancaq dərsliklər, bloglar, məqalələr və digər məzmunu oxuduqca, ikiqat təklifi və tək sitatı tez-tez görəcəksiniz. Unutmayın ki, bu, riktukla eyni şəkildə bir ipdir. İçində alfasayısal simvollar, hərflər, rəqəmlər və xüsusi işarələr var. Bu, insan ünsiyyətinin vacib bir hissəsidir. Cümlələr yazırıq, bir-birimizi ləng və başqa şeylərlə mesajlaşırıq, ona görə də məlumatı, əsasən istifadəçinin bizə verdiyi tərzdə qoyduğu kimi saxlayan bir yolu saxlamalıyıq.
oyuna girmək.

Nömrələri
Nömrələri. Gəlin rəqəmlərdən danışaq. Nömrələr səsləndikləri qədər sadədir. Nömrələr nömrələr üçündür. Buraya bir məktub qoya bilmirəm. Artıq bir rəqəm deyil və rəngləmə qəribə olur. Artıq yaşıl deyil. Ancaq bu rəqəmi istədiyim qədər edə bilərəm. Vergül əlavə edə bilmirəm, amma ondalık nöqtə əlavə edə bilərəm. Beləliklə, rəqəmlər dildə yaradılan hər hansı bir tam və ya ondalık rəqəmdir və pul, yaş və s. Üçün istifadə olunur, burada həyatda pul istifadə etdiyimiz eyni şeylər.

Booleans
Booleansların iki dəyəri var. Doğru və yalan. Bir boolean yaratdığımızda sadəcə bunun doğru və ya yalan olduğunu söyləyirik. Bəhs etdiyimiz açma / söndürmə açarı nümunəsinə bənzəyir. Hal-hazırda hər şey var. Bu dəyişkənləri başqa bir vaxtda oynamağın digər cəhətləri barədə danışacağıq.

Davam edib bunları düşünmək üçün bir dəqiqə çəkənlər üçün etiketləyəcəyəm. Bunlar simlərdi. Bu rəqəmdir və bu, zaman zaman bir bool da adlandırılan bir boolean. Yaxşı. Bundan sonra boş və qeyri-müəyyən mövzulardan danışacağıq.

Qeyri-müəyyəndir
Konseptual videolarda qeyd etdiyimiz kimi boş və qeyri-müəyyən bir stend. Bu, onlara verilən heç bir dəyəri olmadıqları deməkdir. Fərq, dəyər vermədiyimiz zaman təyin olunmamışdır. Var qafiyəsinə dönsəm və yaxşılıq etsəm, köhnə klassik, "Qızılgüllər qırmızı, bənövşələr mavi rəngdədir." Bu simdir. Gedərəm ... Sizə geri qayıtlardan istifadə etməyinizi söylədim, buna görə irəli gedərək geri qayıtlardan istifadə edəcəyəm. Bax, mən bunu edə bilərəmsə, sən də edə bilərsən. Yalnız səhv bir sitat istifadə etdinizsə, bu yaxşıdır. Yalnız düzəltməyi unutmayın. "Qızılgüllər oxunur, bənövşələr mavi rəngdədir." Bunu dəyişənə qoyun.

Ancaq bu dəyəri qafiyə vermədimsə, qafiyənin indi təyin olunmamış bir dəyəri var. Qafiyə yaradıldı, məlumatları yadda saxlamağımız üçün saxlama yeri ayrıldı, amma orada heç bir şey qoyulmadığı üçün təyin olunmamışdır. Davam edib bu oğlanı, bütün cümləni yenidən tutub geri qoyacağam və bu cümləni buraya aparıb sintaksisimi düzəldəcəyəm. Orada gedirik. Qafiyəmin bir nüsxəsini burada aldım. Buna qafiyə1 və qafiyə2 deyəcəyəm. Budur, bir dəyərim var və bəlkə də sonradan səbəblərdən bir inkişaf etdirici olaraq bu qafiyənin getməsini istədiyimə qərar verdim. Onu sıfırlaya bilərəm. Bunu bərabər işarəsi olan dəyişən tapşırıqdan istifadə edərək məqsədli olaraq bir geliştirici olaraq etdim.

Sıfır və təyin olunmayan hər şey var. Unutmamalı olduğumuz ən böyük şeylərdən biri, heç vaxt dəyişənə bir dəyər verməmisinizsə, bunun təyin olunmamasıdır. Həm də yaradılmamış bir dəyişən ada daxil olmaq istədiyiniz zaman, məsələn, rhyme3 axtara bilərdim. Bu mövcud deyil, çünki mən yaratmamışam. JavaScript yalnız təyin olunmamış olduğunu düşünəcəkdir. Əgər bununla qarşılıqlı əlaqədə olmağa çalışsam, bu mənə təyin olunmamış dəyəri verəcəkdir. Bir çox dəfə kodumu poza bilərəm, buna görə bunu etmək istəmirik, ancaq JavaScript-in standart davranışının hər şeyə bir dəyər təyin olunana qədər təyin olunmadığını anlamaq vacibdir. Bir şeyə bir dəyər verildikdə, sıfırdan keçərək onu boşalda bilərik.

### Logical operators
Məntiqi operatorlar
JavaScript-də dörd məntiqi operator var: || (OR), && (AND),! (DEYİL), ?? (Nullish Coalescing). Burada ilk üçü əhatə edirik, ?? operator növbəti məqalədə.

Bunlara “məntiqi” deyilməsinə baxmayaraq, yalnız mantıksız deyil, hər növ dəyərlərə tətbiq edilə bilər. Onların nəticəsi də hər cür ola bilər.

Gəlin təfərrüatlarına baxaq.

|| (Və ya)
“OR” operatoru iki şaquli xətt işarəsi ilə təmsil olunur:
result = a || b;
 

 Klassik proqramlaşdırmada məntiqi OR yalnız boole dəyərlərini idarə etmək üçündür. Dəlillərindən biri doğrudursa, doğrudur, əks halda yalan olur.

JavaScript-də operator biraz hiyləgər və daha güclüdür. Ancaq əvvəlcə boole dəyərləri ilə nə baş verdiyini görək.

Dörd mümkün məntiqi birləşmə var



Logical operators 
Operator	                      Usage	                           Description
Logical AND (&&)	        expr1 && expr2                       Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

Logical OR (||)	            expr1 || expr2	                                   Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
Logical NOT (!)	!expr	                                           Returns false if its single operand that can be converted to true; otherwise, returns true.
Məntiqi operatorlar
Operator istifadə təsviri
Məntiqi AND (&&) expr1 && expr2 ifr1-i yalnışa çevirə bilsə qaytarır; əks halda, expr2 qaytarır. Beləliklə, Boolean dəyərləri ilə istifadə edildikdə, && hər iki operand doğru olduqda true qaytarır; əks halda, false qaytarır.
Mantıksal VEYA (||) expr1 || expr2 true-a çevrilə bilsə expr1-i qaytarır; əks halda, expr2 qaytarır. Beləliklə, Boolean dəyərləri ilə istifadə edildikdə, || hər iki operand doğrudursa, doğru qayıdır; hər ikisi də səhvdirsə, yalan qaytarır.
Məntiqi DEYİL! əks halda doğrudur.
Yalana çevrilə bilən ifadələrə null, 0, NaN, boş simli ("") və ya tərifsiz olaraq qiymətləndirən ifadələr aiddir.

The following code shows examples of the && (logical AND) operator.

var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false
Copy to Clipboard
The following code shows examples of the || (logical OR) operator.

var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat
Copy to Clipboard
The following code shows examples of the ! (logical NOT) operator.

var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false
Compound assignment operators
Name	Shorthand operator	Meaning
Assignment	x = y                                                    	                    x = y
Addition assignment	x += y                                                              	x = x + y
Subtraction assignment	x -= y	                                                            x = x - y
Multiplication assignment	x *= y                                                         	x = x * y
Division assignment	x /= y	                                                                x = x / y
Remainder assignment	x %= y	                                                            x = x % y
Exponentiation assignment	x **= y                                                       	x = x ** y
Left shift assignment	x <<= y	                                                            x = x << y
Right shift assignment	x >>= y                                                          	x = x >> y
Unsigned right shift assignment	x >>>= y	                                                x = x >>> y
Bitwise AND assignment	x &= y                                                           	x = x & y 
Bitwise XOR assignment	x ^= y	                                                            x = x ^ y
Bitwise OR assignment	x |= y	                                                            x = x | y
Logical AND assignment	x &&= y                                                           	x && (x = y)
Logical OR assignment	x ||= y	                                                            x || (x = y)
Logical nullish assignment	x ??= y	                                                        x ?? (x = y)




### JavaScript Arithmetic Operators

Hesab operatorları ədədi ədədi (ədədi və ya dəyişən) üzərində aparırlar.
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

let x = 5;
let y = 2;
let z = x + y;

let x = 5;
let y = 2;
let z = x % y;



# Demo arastirma movzulari
Difference between var, let, const
Console in Javascript (log, error, warn,table,clear,count)
Data types in Javascript
Logical operators
JavaScript Arithmetic Operator(Modulus,increment,decrement)
### Araşdırma detalları
1) Difference between var, let, const
https://codeburst.io/difference-between-var-let-and-const-in-javascript-fbce2fba7b4
2) Console in Javascript (log, error, warn,table,clear,count)
https://www.w3schools.com/jsref/api_console.asp
3) Data types in Javascript
https://blog.devmountain.com/what-are-data-types-javascript-101/
4) Logical operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
5) JavaScript Arithmetic Operators
https://www.w3schools.com/js/js_arithmetic.asp
## Week 05 Day 04

How Many Different Types of Loop Methods Are There and Basic Concepts
You can use the following loop methods in JS. But why there are so many different loop methods, I will explain it below.
for
while
do/while
forEach
for…in
for…of
recursion
Continue/Break commands are a way of managing the loop extra. For example, you have logical operations, but you do not want the code to run for the relevant part of the loop. If you want it to skip c ontinue. If you say that you have finished your operations in the part of the loop and you do not need to work for the others, you can make your loop work more efficiently by using the break command.
Recursive: Loops are created with self-invoking functions and the loop is terminated in a certain situation. Your code will throw a stackoverflow errorif my function is not stopped at some point calling itself.
Iterator: These are structures that allow navigating the Collection etc data structures in languages ​​such as Java, C++. In Collection data structures derived from the Iterable interface, the iterator is the pointer that holds which node it is on. Similar structures exist in JS.
2. For, While, Do/While Loops
In procedural programming, they are looping methods that we consistently use in Basic, Pascal, C, and Java. These loops are used for very general purposes. Thanks to the flexibility provided, you can create the type of loop you want very simply.
Features of the for loop;
You set the condition from the beginning. This loop may never start (i<5)
You set the variable that determines the condition in the loop. (I)
In the for loop, you specify the initial value of the variable and how it will increase. (i++) so it is said to increase by 1 each time.
The form of the for loop is specific from the start.
The continue/break commands work.
for(let i=0;i<5;i++) console.log(i);
Features of while loop;
You specify the condition from the beginning again (i<5)
Determine the initial value of the loop variable in Meza . (i=1)
The increase of the variable can be increased or decreased within the scope of the loop and can be changed as desired.
It provides a more flexible loop structure than for.
The continue/break commands work.
let i=1; while(i<5) {console.log(i); i++};
Features of the Do/While loop
The condition checks the probe this time (i<5)
It always does the first action.
Other parts are the same as the while loop .
The continue/break commands work.
let i=1; do{ console.log(i); i++} while(i<5) ;
3. forEach and Other Preset Functions
It has a function that can pass over all elements such as forEach in Array, Map and Set data structures. The disadvantage of this is that there is no possibility to continue/break .
const numberArray=[1,2,2,4,5];
const colorSet=new Set(["red","green","blue"]);
const colorMap=new Map([['red',1],['green',2]])
numberArray.forEach(el=>console.log(el))
colorSet.forEach(el=>console.log(el))
colorMap.forEach((value,key, map)=>{console.log(`${key}:${value}`)})
I would like to talk about other functions like forEach using Array, which is realized with the High Order Functions method with Functional Programming. → map, filter, find, findIndex, reduce, every, some, etc functions are ready-made functions provided to developers combined with loops for a specific purpose.
forEach: return all array elements
filter: return all array elements and filter by condition
map: map all array elements as another array.
find: Find the element you are interested in in the array.
reduce array is to create a single output.
every whether all given elements pass the test
some is whether some of the given elements pass the test.
In the future, when I explain functional programming, I will dwell on these issues in more detail.
4. Why Was For…of Needed? Other Cycles Not Enough?
In fact, you can provide any kind of loop you want with the loop types we mentioned above. Why did forEach, for…of, for…in etc loops appear?
There are different data structures in applications. These are String, Array, LinkList, Set, Map, Trie Tree, Graph etc. When you want to navigate these data structures, we need easier methods than the loops mentioned above. These types of structures increase both our code writing and the readability of the code.
In the following data structures
Arrays
Strings
Maps
Sets
DOM data structures
Symbols
I have made a few examples of this below. A very important point here is that you can use continue/break commands in for…of.
const arr=[1,2,2,4,5];
const str='12245'
const set=new Set([1,1,2,4])
const map=new Map([['a',1],['b',2],['c',3]]);
for(let val of arr) console.log(val);
for(let val of str) console.log(val);
for(let val of set) console.log(val);
for(let val of map) console.log(val);
Here , I would like to briefly talk about the for…in loop. For example, you have an object and you want to return property of it, you can use for…in for this.
const me={name:"Onur", age:39, height:180};
for(let key in me) console.log(key+":"+me[key]);
There are other methods of accessing the object's property key or entry. In the Object.keys() and Object.entries() methods, you can create loops over the results returned as an array.
const me={name:"Onur", age:39, height:180};
for(let key of Object.keys(me)) console.log(key)
for(let keyVal of Object.entries(me)) console.log(keyVal)
5. Recursive Functions
These self-invoking functions are a very common technique, especially in functional programming. Calling the function itself allows the code to be written in a more readable and shorter way, but as I mentioned above, it is necessary to pay attention to the stack-overflow issue.
If we look at the example below, the Fibonacci numbers are the sum of the previous Fibonacci number and itself. F(n)=F(n-1) + F(n-2)
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
If we write this in a recursive way, we will have an image that is closer to the mathematical description.
Fibonacci = const (num) => { 
   if (num <= 1) return 1; 
   return Fibonacci (whether - 1) + Fibonacci (whether - 2); 
} 
Console.log (Fibonacci (5));




## promt, confirm, alert 
Qarşılıqlı əlaqə: həyəcan qutusu, istifadəçini istəmə, təsdiqləmə
Bu bölmə ətraf mühitdən, yəni brauzerdən və ya serverdən asılı olduğu üçün JavaScript-i əhatə edir.

Ancaq hazırda təlimlər brauzerdə aparılır. Buna görə ən azı istifadəçi interfeysinin funksiyasını bilmək faydalıdır. Bu bölmədə aler, , prompt, confirmfunksiyaları ki browser iş olacaq araşdırılacaq.
### Alert
alert(mesaj);
Bu, ekranda 'mesaj' dəyişənini çıxaracaq və koddakı növbəti addım bu açılır pəncərədə "Tamam" düyməsinə basılmadan keçməyəcəkdir.

Misal üçün:
alert("Salam");
 Ekranda görünən kiçik pəncərəyə modal pəncərə deyilir. “Modal” o deməkdir ki, səhifədən istifadə edən şəxs bu halda səhifə ilə əlaqə qura bilməz, digər düymələrə basa bilməz və yalnız bu pəncərə ilə qarşılıqlı əlaqə qura bilər. Başqa sözlə, “OK” düyməsinə basılması gözlənilir.
### Prompt
 İstifadəçidən məlumat istənir
promptFunksiya istifadəçidən məlumat tələb etmək üçün istifadə olunur . Bu funksiyanın iki arqumentə ehtiyacı var:
result = prompt(başlık[, varsayılan]);
Modal pəncərədə bir mətn və OK / Ləğv düymələri var.

başlık
Mətn istifadəçiyə göstəriləcək.
default
İsteğe bağlı ikinci parametr giriş sahəsi üçün standart dəyəri ehtiva edir.
İstifadəçi istədiklərini ekranda görünən məlumat giriş qutusuna yazır və OK düyməsini basır. Və ya Ləğv etmə düyməsini basaraq ləğv edə bilərsiniz. Or Escdüyməsi də eyni şeyi edir.

İstifadəçi bir dəyər daxil etmişsə, onu geri qaytarır, əks halda həmin ekrandan Escvə ya Ləğv et düyməsindən çıxır null.

Misal üçün: 
let age = prompt('Kaç yaşındasın?', 100);

alert(`Sen ${age} yaşındasın!`); // Sen 100 yaşındasın!

həmişə varsayılandəyər istifadə edin
İkinci parametr isteğe bağlıdır. Ancaq bu parametri göndərməsək, Internet Explorer "undefined"onu məlumat giriş ekranında göstərəcəkdir.

İstəsəniz, aşağıdakı kodu Internet Explorer-da işə sala və görə bilərsiniz:

let test = prompt("Test");
Buna görə də, boş olmasına baxmayaraq həmişə ona bir dəyər təyin etmək vacibdir ki, bu da IE-də düzgün görünsün. Yeri gəlmişkən, bu problem Edge brauzerində görünmür.

let test = prompt("Test", ''); // <-- for IE

### Confirm
Təsdiq
Orfoqrafiya:

result = confirm(soru);
confirmYazdığımız funksiya soruOK və Ləğv düymələri olan bir pəncərə yaradır.

OK düyməsinə basılmışsa true, CANCEL falsedüyməsinə basılmışsa qayıdır .

Misal üçün:

let patron = confirm("Patron musun?");

alert( patron ); // eğer OK'e basıldıysa `true` döner.
Xülasə
Bu bölmədə istifadəçi ilə qarşılıqlı əlaqəni təmin edən 3 brauzer əsaslı funksiyadan istifadə olunur.

alert
Ekranda bir mesaj göstərir.
prompt
İstifadəçiyə mesajla bir sual verir. Bir məlumat giriş qutusu ilə bir cavab alır. İstifadəçi mətn yazır və OKdüyməni basarsa, yazılmış dəyər qaytarılır. Və CANCELya Escdüyməsini basarsa, nulldəyər brauzerə qaytarılır.
confirm
İstifadəçini “OK” və ya “Ləğv et” düyməsini basmağı tələb edir. İstifadəçi “OK” düyməsinə basarsa true, LƏĞV və ya Eschalda false qaytarır.
Bütün bu metodlar modadır. Yəni bu kod işlədikdə, istifadəçi bu pəncərələr bağlanana qədər səhifənin digər hissələri ilə qarşılıqlı əlaqə qura bilməz.

Yuxarıda göstərilən metodların iki məhdudiyyəti var.

Bu açılan modalın yeri ümumiyyətlə səhifənin ortasındadır.
Həm də brauzerdən brauzerə dəyişən ekranın tərzi. Bunu dəyişdirə bilməzsiniz.
Bu, hər şeyi sadələşdirməyə bərabərdir. Əlbətdə ki, daha gözəl ekranları müxtəlif yollarla göstərmək mümkündür, ancaq görüntünün o qədər də vacib olmadığını, funksionallığın vacib olduğunu söyləyirsinizsə, onda bu metodlardan istifadə edə bilərsiniz.




### JavaScript internalHTML nədir?
JavaScript innerHTML xassəsi bir veb səhifədəki elementin HTML məzmununu təyin edir. InnerHTML HTML DOM-un bir xüsusiyyətidir. innerHTML tez-tez <p> elementinin məzmununun təyin edilməsi və dəyişdirilməsi üçün istifadə olunur.

İnnerHTML\InnerText

- innerText
- innerHtml
- label
- text
- textContent
- outerText

- innerText dəyəri olduğu kimi göstərir və daxil ola biləcək hər hansı bir HTML işarəsini görməzdən gəlir
- innerHTML dəyəri göstərir və istənilən HTML formatını tətbiq edir
- labelilə eyni görünür innerText, buna görə fərqi görə bilmirəm
- textinnerTextJQuery qısaldılmış versiyası ilə eyni görünür
- textContenteyni görünür, innerTextamma formatlaşdırmanı saxlayır (məsələn \n)
- outerText kimi eyni görünür innerText