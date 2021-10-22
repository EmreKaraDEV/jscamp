console.log("Merhaba Kodlama.io")
//artık var yerine let kullanımı yaygınmış
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}
//var olsaydı bu bloğun içindeki uygulanacaktı
//let te sadece mevcut blok okunur
console.log(dolarDun)
//JS type safe değildir

const euroDun = 11.2
//euroDun = 11 //HATA VERİR çünkü const sabit demektir
console.log(euroDun)

let konutKredileri = ["Konut kredisi","Emlak konut kredisi", "Kamu konut kredisi","Özel konut kredisi"]
console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

