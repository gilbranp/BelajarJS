// // // const judul = document.getElementById( "judul" );
// // // judul.innerHTML = "INILAH JAVASCRIPT";

// // // const p = document.getElementsByTagName('p');

// // // for (let i = 0; i < p.length; i++){
// // //     p[i].style.color='red';
// // //     p[0].innerHTML='Paragraf 1 menggunakan JS'
// // //     p[1].innerHTML='Paragraf kedua menggunakan JS,yang lain sesuai HTML'
// // //     p[2].style.backgroundColor='blue';
// // // }


// // // const title = document.getElementById('title');
// // // title.innerHTML="Belajar Js ini CUY";

// // // const paragraf = document.getElementsByTagName('p');
// // // p[1].style.backgroundColor = 'blue';

// // // const nama = getElementById( "nama" );

// // const p4 = document.querySelector('#b p');
// // p4.style.color = 'lightblue';
// // p4.style.fontSize = '30px';

// // const judul = document.getElementById( 'judul');
// // judul.innerHTML = 'inilah ArJUNAA';

// // const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // li2.style.color = 'blue';

// // const sectionB = document.querySelector('section#b');
// // const p5 = sectionB.querySelectorAll('p')
// // p5[0].innerHTML = 'diubah dari js'

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Radenta GS</em>';

// // const sectionA = document.querySelector('section#a');
// // sectionA.innerHTML = 'hello wolrd!'

// const pBaru = document.createElement('p')
// const teksPBaru = document.createTextNode('Paragraf baru')

// //simpan tulisan ke dalam paragaraf
// pBaru.appendChild(teksPBaru);
// //simpan pbaru di akhir section A
// const sectionA = document.getElementById( 'a' );
// sectionA.appendChild(pBaru)

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);


// const link = document.getElementsByTagName('a') [0];
// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);


// pBaru.style.backgroundColor = 'lightgreen'
// liBaru.style.backgroundColor = 'lightgreen'
// h2Baru.style.backgroundColor = 'lightgreen'


// const p3 = document.querySelector('.p3');

// function ubahWarna(){
//     p2.style.backgroundColor = 'green';

// }
 
// const p2 = document.querySelector('.p2');
// p2.onclick =  ubahWarna;


// const p4 = document.querySelector('section#b p');
// p4.addEventListener('mouseenter', function() {
//    const ul = document.querySelector('section#b ul');
//    const liBaru = document.createElement('li');
//    const teksLiBaru = document.createTextNode('item baru');
//    liBaru.appendChild(teksLiBaru);
//    ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightgreen';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightyellow';
});

const p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter', function() {
    p2.style.backgroundColor = 'lightblue';
});
p2.addEventListener('mouseleave', function() {
    p2.style.backgroundColor = 'lightyellow';
});