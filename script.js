const funk1 = (a) => {
   let yoxlanilan = Array.isArray(a)
   let b
   if(yoxlanilan  === true){
    b = "ArqumentArraydir"
   }else{
    b = "ArqumentArrayDeyil"
   }
   console.log(b);
   return b
}
funk1([])

const funk2 = (a,b) => {
    let tamreqem = ""
    if(b.length < 10){
        alert("Nomre 10 reqemden azdir, dogru qeyd edin")
    }else if(b.length > 10){
        alert("Nomre 10 reqemden coxdur, dogru qeyd edin")
    }else{
        if(a != "+994"){
            tamreqem = "+994" + b.slice(1,10)
        }else{
            tamreqem = a + b.slice(1,10)
        }
    }
    console.log(tamreqem);
    return tamreqem
}
funk2("+994","0703226838")

const funk3 = (a) => {
    const b = a.map((item,index)=>{
        return index
    })
    console.log(b);
    return b
}
funk3([undefined,null,{},[],true])

const tarix1 = new Date("December 16, 2022");
const tarix2 = new Date("December 14, 2022");

const funk4 = (a,b) => {
    if (a < b) {
        console.log("tarix1 daha kohnedeir tarix2-den");
      } else if (a > b) {
        console.log("tarix1 daha yenidir tarix2-den");
      }
};
funk4(tarix1,tarix2)

const Tarix = new Date();
const il = Tarix.getFullYear();
const ay = Tarix.getMonth();

const funk5 = (a,b) => {
  const sonuncuGun = new Date(a,b+1,0);
  console.log(sonuncuGun);
}
funk5(il,ay)

const funk6 = (a) => {
  let Numb = parseInt(a)
  let saat;
  let deqiqe;
  deqiqe = Numb%60;
  saat = (Numb / 60).toFixed()
  let tamVaxt = `${saat}saat , ${deqiqe}deqiqe`
  console.log(tamVaxt);
  return tamVaxt
}
funk6('220 deq')

const funk7 = (string, reqem) => {
  var TekrarlananStrinq = "";
  while (reqem > 0) {
    TekrarlananStrinq += string + " ";
    reqem--;
  }
  console.log(TekrarlananStrinq);
  return TekrarlananStrinq;
}
funk7("Salam", 5);

const funk8 = (a) => {
  const string = a.toString();
  const result = string.charCodeAt(0);
  console.log(result);
  return result;
}
funk8("salam");

const funk9 = (gonderilen) => {

  const Errey = gonderilen.toString().split('').map(Number);

  const Toplam = Errey.map(a => {return a**3}).reduce((a, b) => a + b,0);

  if(Toplam == gonderilen){
      console.log('Bu armstrong reqemdir');
  }else{
      console.log('Bu armstrong reqem deyil');
  }
}
funk9(153);

const funk10 = () => {
  let sum = 0;
  for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
};
funk10()
