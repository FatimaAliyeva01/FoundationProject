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
