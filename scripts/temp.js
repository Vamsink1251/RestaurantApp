let price=new Map();
price.set("chickenBiryani",220);
price.set('frenchFries',105);
price.set('chickenPizza',180);
price.set("muttonDumBiryani",280);
price.set("chickenMandi",800);
price.set("vegBiryani",180);
price.set("chickenLollipops",280);
price.set("mixedBiryani",280);
price.set("chicken65",220);
price.set("iceCream",60);
price.set("bananaSplit",60);
price.set("chocolateCake",60);
price.set("gulabJamun",40);
price.set("payasam",80);
price.set("tequila",180);
price.set("bananaMilkShake",70);
price.set("hotChocolate",80);
price.set("water",20);
price.set("coke",30);
price.set("mozarellaStick",220);
price.set("spicyLobster",240);
price.set("greenPapayaSalad",160);
price.set("muttonMandi",180);


let tables=[
    {
    total_price:0,
    count:0,
    items:{}
},{
    total_price:0,
    count:0,
    items:{}
},{
    total_price:0,
    count:0,
    items:{}
},{
    total_price:0,
    count:0,
    items:{}
}
];

if(localStorage.getItem("tables")===null)
{
localStorage.setItem("tables", JSON.stringify(tables)); //1
}
const data = localStorage.getItem("tables");//1
tables=JSON.parse(data)//1
setTimeout(update_web(),1000); //1