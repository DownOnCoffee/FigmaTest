function showsidebar() {
  const open = document.querySelector(".sidebar");
  open.style.display = "flex";
}
function hidesidebar() {
  const close = document.querySelector(".sidebar");
  close.style.display = "none";
}
const arr = [
  {
    logo: "bitcoin.png",
    name: "Bitcoin",
    abrv: "BTC",
    price: "$3625.24",
    change: "+2.4%",
    img: "/greenchart.png",
    market: "$320,383,955",
  },
  {
    logo: "bitcoingem.png",
    name: "Etherum",
    abrv: "ETH",
    price: "$1218.18",
    change: "-0.7%",
    img: "redchart.png",
    market:"$148,563,792,762"
  },
  {
    logo: "bitcoinfox.png",
    name: "Shibulnu",
    abrv: "Shibu",
    price: "$0.001",
    change: "+1.2%",
    img: "greenchart.png",
    market: "$4,498,804,882",
  },
  {
    logo: "bitcoin.png",
    name: "Bitcoin",
    abrv: "BTC",
    price: "$3625.24",
    change: "+2.4%",
    img: "greenchart.png",
    market: "$320,383,955",
  },
  {
    logo: "bitcoingem.png",
    name: "Etherum",
    abrv: "ETH",
    price: "$1218.18",
    change: "-0.7%",
    img: "redchart.png",
    market:"$148,563,792,762"
  },
  {
    logo: "bitcoinfox.png",
    name: "Shibulnu",
    abrv: "Shibu",
    price: "$0.001",
    change: "+1.2%",
    img: "greenchart.png",
    market: "$4,498,804,882",
  },
  {
    logo: "bitcoin.png",
    name: "Bitcoin",
    abrv: "BTC",
    price: "$3625.24",
    change: "+2.4%",
    img: "greenchart.png",
    market: "$320,383,955",
  },
  {
    logo: "bitcoingem.png",
    name: "Etherum",
    abrv: "ETH",
    price: "$1218.18",
    change: "-0.7%",
    img: "redchart.png",
    market:"$148,563,792,762"
  },
  {
    logo: "bitcoinfox.png",
    name: "Shibulnu",
    abrv: "Shibu",
    price: "$0.001",
    change: "+1.2%",
    img: "greenchart.png",
    market: "$4,498,804,882",
  },
  {
    logo: "bitcoin.png",
    name: "Bitcoin",
    abrv: "BTC",
    price: "$3625.24",
    change: "+2.4%",
    img: "greenchart.png",
    market: "$320,383,955",
  },


];

window.addEventListener("DOMContentLoaded",function(){
    const content=document.getElementById("content");
    const showHTML=arr.map((item)=>{
        return `
        <tr>
        <td class="firstcolumn"><img style="width:24px" src=${item.logo}>${item.name} <span class="abbrevation">${item.abrv}</span></td>
        <td>${item.price}</td>
        <td style="color:#14FF00">${item.change}</td>
        <td><img src=${item.img}></td>
        <td>${item.market}</td>
        </tr>
        `;
    }).join('');
    content.innerHTML=showHTML;
});
