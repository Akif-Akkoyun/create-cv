const deger = document.getElementById('metin');
const sonuc = document.getElementById('name');

const degerYakala = function(e) {
  sonuc.innerHTML = e.target.value;
}

deger.addEventListener('input', degerYakala);
// ----------------------------------------------------
const deger1 = document.getElementById('unvan');
const sonuc1 = document.getElementById('un');

const degerYakala1 = function(e) {
  sonuc1.innerHTML = e.target.value;
}

deger1.addEventListener('input', degerYakala1);
// ----------------------------------------------------
const deger2 = document.getElementById('unvan');
const sonuc2 = document.getElementById('un');

const degerYakala2 = function(e) {
  sonuc2.innerHTML = e.target.value;
}

deger2.addEventListener('input', degerYakala2);
// ----------------------------------------------------
//İletişim Bilgileri
// ----------------------------------------------------
const deger3 = document.getElementById('tel');
const sonuc3 = document.getElementById('t');

const degerYakala3 = function(e) {
  sonuc3.innerHTML = e.target.value;
}

deger3.addEventListener('input', degerYakala3);
// ----------------------------------------------------
// ----------------------------------------------------
const deger4 = document.getElementById('usermail');
const sonuc4 = document.getElementById('m');

const degerYakala4 = function(e) {
  sonuc4.innerHTML = e.target.value;
}

deger4.addEventListener('input', degerYakala4);
// ----------------------------------------------------
// ----------------------------------------------------
const deger5 = document.getElementById('url');
const sonuc5 = document.getElementById('w');

const degerYakala5 = function(e) {
  sonuc5.innerHTML = e.target.value;
}

deger5.addEventListener('input', degerYakala5);
// ----------------------------------------------------
// ----------------------------------------------------
const deger6 = document.getElementById('adres');
const sonuc6 = document.getElementById('a');

const degerYakala6 = function(e) {
  sonuc6.innerHTML = e.target.value;
}

deger6.addEventListener('input', degerYakala6);
// ----------------------------------------------------
//Eğitim Bilgileri
// ----------------------------------------------------
const deger7 = document.getElementById('egitim1');
const sonuc7 = document.getElementById('egitim');

const degerYakala7 = function(e) {
  sonuc7.innerHTML = e.target.value;
}

deger7.addEventListener('input', degerYakala7);
// ----------------------------------------------------
//Yetenek
// ----------------------------------------------------
const deger8 = document.getElementById('skill');
const sonuc8 = document.getElementById('yetenek1');

const degerYakala8 = function(e) {
  sonuc8.innerHTML = e.target.value;
}

deger8.addEventListener('input', degerYakala8);
// ----------------------------------------------------
//Hakkımda
// ----------------------------------------------------
const deger9 = document.getElementById('hakkımda');
const sonuc9 = document.getElementById('hakkımda1');

const degerYakala9 = function(e) {
  sonuc9.innerHTML = e.target.value;
}

deger9.addEventListener('input', degerYakala9);
// ----------------------------------------------------
//İş Deneyimi
// ----------------------------------------------------
const deger10 = document.getElementById('deneyim2');
const sonuc10 = document.getElementById('deneyim1');

const degerYakala10 = function(e) {
  sonuc10.innerHTML = e.target.value;
}

deger10.addEventListener('input', degerYakala10);
// ----------------------------------------------------
//Eğitim İşlemleri
// ----------------------------------------------------
const deger11 = document.getElementById('okul1');
const sonuc11 = document.getElementById('egitimBilgi');

const degerYakala11 = function(e) {
  sonuc11.innerHTML = e.target.value;
}

deger11.addEventListener('input', degerYakala11);
// ----------------------------------------------------
const deger12 = document.getElementById('o1');
const sonuc12 = document.getElementById('egitimAcıklama');

const degerYakala12 = function(e) {
  sonuc12.innerHTML = e.target.value;
}

deger12.addEventListener('input', degerYakala12);
// ----------------------------------------------------
const deger13 = document.getElementById('okul2');
const sonuc13 = document.getElementById('egitimBilgi1');

const degerYakala13 = function(e) {
  sonuc13.innerHTML = e.target.value;
}

deger13.addEventListener('input', degerYakala13);
// ----------------------------------------------------
const deger14 = document.getElementById('o2');
const sonuc14 = document.getElementById('egitimAcıklama1');

const degerYakala14 = function(e) {
  sonuc14.innerHTML = e.target.value;
}

deger14.addEventListener('input', degerYakala14);
// ----------------------------------------------------
const deger15 = document.getElementById('okul3');
const sonuc15 = document.getElementById('egitimBilgi2');

const degerYakala15 = function(e) {
  sonuc15.innerHTML = e.target.value;
}

deger15.addEventListener('input', degerYakala15);
// ----------------------------------------------------
const deger16 = document.getElementById('o3');
const sonuc16 = document.getElementById('egitimAcıklama2');

const degerYakala16 = function(e) {
  sonuc16.innerHTML = e.target.value;
}

deger16.addEventListener('input', degerYakala16);
// ----------------------------------------------------
// Yetenek İşlemleri
// ----------------------------------------------------
const deger17 = document.getElementById('skill1');
const sonuc17 = document.getElementById('yetenekBilgi');

const degerYakala17 = function(e) {
  sonuc17.innerHTML = e.target.value;
}

deger17.addEventListener('input', degerYakala17);
// ----------------------------------------------------
const deger18 = document.getElementById('master1');
const sonuc18 = document.getElementById('yetenekAciklama');

const degerYakala18 = function(e) {
  sonuc18.innerHTML = e.target.value;
}

deger18.addEventListener('input', degerYakala18);
// ----------------------------------------------------
const deger19 = document.getElementById('skill2');
const sonuc19 = document.getElementById('yetenekBilgi1');

const degerYakala19 = function(e) {
  sonuc19.innerHTML = e.target.value;
}

deger19.addEventListener('input', degerYakala19);
// ----------------------------------------------------
const deger20 = document.getElementById('master2');
const sonuc20 = document.getElementById('yetenekAciklama1');

const degerYakala20 = function(e) {
  sonuc20.innerHTML = e.target.value;
}

deger20.addEventListener('input', degerYakala20);
// ----------------------------------------------------
const deger21 = document.getElementById('skill3');
const sonuc21 = document.getElementById('yetenekBilgi2');

const degerYakala21 = function(e) {
  sonuc21.innerHTML = e.target.value;
}

deger21.addEventListener('input', degerYakala21);
// ----------------------------------------------------
const deger22 = document.getElementById('master3');
const sonuc22 = document.getElementById('yetenekAciklama2');

const degerYakala22 = function(e) {
  sonuc22.innerHTML = e.target.value;
}

deger22.addEventListener('input', degerYakala22);
// ----------------------------------------------------
//Arka Plan Rengi
// ----------------------------------------------------
function changecolor1(){
  let color1 = document.getElementById('favcolor1').value;
  document.getElementById("cv").style.backgroundColor = color1;
  document.getElementById("sag").style.backgroundColor= color1; 
}
// ----------------------------------------------------
function changecolor2(){
  let color2 = document.getElementById('favcolor2').value;
  document.getElementById("solKolon").style.backgroundColor = color2;
}
// ----------------------------------------------------
function changecolor3(){
  let color3 = document.getElementById('favcolor3').value;
  document.getElementById("nameSpace").style.backgroundColor = color3;  
}
// ----------------------------------------------------
function changecolor4(event){
  nameSpace.style.color=event.target.value;  
}
// ----------------------------------------------------
//Okul Seçimi
// ----------------------------------------------------
function SelectMenu(){
  if(document.getElementById('okl').value=="s1"){
    document.getElementById('okulLabel1').hidden=false;
    document.getElementById('okul1').hidden=false;
    document.getElementById('o1').hidden=false;
  }
  else if(document.getElementById('okl').value=="s2"){
    document.getElementById('okulLabel1').hidden=false;
    document.getElementById('okul1').hidden=false;
    document.getElementById('o1').hidden=false;
    document.getElementById('okulLabel2').hidden=false;
    document.getElementById('okul2').hidden=false;
    document.getElementById('o2').hidden=false;
  }
  else if(document.getElementById('okl').value=="s3"){
    document.getElementById('okulLabel1').hidden=false;
    document.getElementById('okul1').hidden=false;
    document.getElementById('o1').hidden=false;
    document.getElementById('okulLabel2').hidden=false;
    document.getElementById('okul2').hidden=false;
    document.getElementById('o2').hidden=false;
    document.getElementById('okulLabel3').hidden=false;
    document.getElementById('okul3').hidden=false;
    document.getElementById('o3').hidden=false;
  }
}
// ----------------------------------------------------
//Yetenek Seçmi
// ----------------------------------------------------
function YetenekSecimi(){
  if(document.getElementById('yetenek').value=="yetenek1"){
    document.getElementById('skillLabel1').hidden=false;
    document.getElementById('skill1').hidden=false;
    document.getElementById('master1').hidden=false;
  }
  else if(document.getElementById('yetenek').value=="yetenek2"){
    document.getElementById('skillLabel1').hidden=false;
    document.getElementById('skill1').hidden=false;
    document.getElementById('master1').hidden=false;
    document.getElementById('skillLabel2').hidden=false;
    document.getElementById('skill2').hidden=false;
    document.getElementById('master2').hidden=false;
  }
  else if(document.getElementById('yetenek').value=="yetenek3"){
    document.getElementById('skillLabel1').hidden=false;
    document.getElementById('skill1').hidden=false;
    document.getElementById('master1').hidden=false;
    document.getElementById('skillLabel2').hidden=false;
    document.getElementById('skill2').hidden=false;
    document.getElementById('master2').hidden=false;
    document.getElementById('skillLabel3').hidden=false;
    document.getElementById('skill3').hidden=false;
    document.getElementById('master3').hidden=false;
  }
}
// ----------------------------------------------------
//Fotoğraf Seçici
// ----------------------------------------------------
function FotoSecici(){
  document.getElementById('kare1').hidden=false;
  if(document.getElementById('fotoSekli').value=="cerceveSekli1"){
    document.getElementById('kare').hidden=false;
    document.getElementById('yuvarlak2').hidden=true;
    document.getElementById('kare1').hidden=true;
  }
  else if(document.getElementById('fotoSekli').value=="cerceveSekli3"){
    document.getElementById('kare1').hidden=true;
    document.getElementById('kare').hidden=true;
    document.getElementById('yuvarlak2').hidden=false;
    document.getElementById('yuvarlak2').style.borderRadius='50%';
    document.getElementById('yuvarlak2').style.width='50px';
    document.getElementById('yuvarlak2').style.height='50px';
  }
  else if(document.getElementById('fotoSekli').value=="cerceveSekli2"){
    document.getElementById('kare1').hidden=true;
    document.getElementById('kare').hidden=true;
    document.getElementById('yuvarlak2').hidden=false;
    document.getElementById('yuvarlak2').style.borderTopLeftRadius='10%';
    document.getElementById('yuvarlak2').style.borderTopRightRadius='10%';
    document.getElementById('yuvarlak2').style.borderBottomLeftRadius='10%';
    document.getElementById('yuvarlak2').style.borderBottomRightRadius='10%';
    document.getElementById('yuvarlak2').style.width='50px';
    document.getElementById('yuvarlak2').style.height='50px';
  }
  else{
    document.getElementById('yuvarlak2').hidden=true;
    document.getElementById('kare').hidden=true;
    document.getElementById('kare1').hidden=false;
  }
}
// ----------------------------------------------------
//Çizgi İşlemleri Seçici
// ----------------------------------------------------
function CizgiRengiSecici(){
  let color5 = document.getElementById('cizgiRengi1').value;
  document.getElementById('baslik1').style.borderColor= color5;
  document.getElementById('baslik2').style.borderColor= color5;
  document.getElementById('baslik3').style.borderColor= color5;
  document.getElementById('baslik4').style.borderColor= color5;
  document.getElementById('baslik5').style.borderColor= color5;
}
function CizgiSecici(){
  if(document.getElementById('cizgininSekli').value=="noktali"){
    document.getElementById('baslik1').style.borderBottomStyle='dotted';
    document.getElementById('baslik2').style.borderBottomStyle='dotted';
    document.getElementById('baslik3').style.borderBottomStyle='dotted';
    document.getElementById('baslik4').style.borderBottomStyle='dotted';
    document.getElementById('baslik5').style.borderBottomStyle='dotted';
  }
  else if(document.getElementById('cizgininSekli').value=="cizgili"){
    document.getElementById('baslik1').style.borderBottomStyle='dashed';
    document.getElementById('baslik2').style.borderBottomStyle='dashed';
    document.getElementById('baslik3').style.borderBottomStyle='dashed';
    document.getElementById('baslik4').style.borderBottomStyle='dashed';
    document.getElementById('baslik5').style.borderBottomStyle='dashed';
  }
  else if(document.getElementById('cizgininSekli').value=="duz"){
    document.getElementById('baslik1').style.borderBottomStyle='solid';
    document.getElementById('baslik2').style.borderBottomStyle='solid';
    document.getElementById('baslik3').style.borderBottomStyle='solid';
    document.getElementById('baslik4').style.borderBottomStyle='solid';
    document.getElementById('baslik5').style.borderBottomStyle='solid';
  }
}
function YaziTipiDegistirici(){
  if(document.getElementById('tip').value=="tip2"){
    document.getElementById('cv').style.fontFamily='Times New Roman';
  }
  else if(document.getElementById('tip').value=="tip3"){
    document.getElementById('cv').style.fontFamily='Courier New';
  }
  else if(document.getElementById('tip').value=="tip4"){
    document.getElementById('cv').style.fontFamily='Lucida Sans';
  }
}
