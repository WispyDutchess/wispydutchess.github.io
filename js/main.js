import lightbox from "./lightbox.js";

lightbox.activate(); 

const myButton = document.createElement("button");



myButton.textContent = "greg!";

lightbox.show(myButton);





// const myImage = document.createElement("img");

// myImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55whtyIvEVqzBQO6gcL2SPVVwITVB9JHqrA&usqp=CAU";

// lightbox.show(myImage);















const images = document.querySelectorAll("img")

images.forEach(image => {
    
    image.addEventListener("click", e => {

        lightbox.classList.add("active")

        const img = document.createElement('img')

        img.src = image.src

        lightbox.appendChild("img") 
        
    });
});




























// import '../css/syntax.css'

// const themeBtn = document.querySelector('.theme');

// function getCurrentTheme(){
//     let theme = window.matchMedia('(prefers-color-scheme: dark)').matches 
//     ? 'dark' 
//     : 'light';
//     localStorage.getItem('wispydutchess.theme') ? theme = 
//     localStorage.getItem('wispydutchess.theme') : null;
//     return theme;
// }

// function loadTheme(theme){
//     const root = document.querySelector(':root');
//     if(theme === "light"){
//         themeBtn.innerHTML = `<svg height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.009 512.009" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#BF655F;" d="M126.076,499.209l5.606-20.514c27.042-35.772,67.874-56.286,112.043-56.286 c44.16,0,84.992,20.514,112.026,56.286l5.606,20.514H126.076z"></path> <polygon style="fill:#FF877F;" points="62.912,90.155 173.077,68.122 233.698,7.509 287.996,61.807 227.375,122.428 205.342,232.593 "></polygon> <path style="fill:#FEDEA1;" d="M129.097,204.809c-21.171,0-38.4-17.229-38.4-38.4c0-7.142,2.202-14.217,6.357-20.454l8.661-12.988 l57.037,57.037l-13.141,8.636C143.45,202.667,136.35,204.809,129.097,204.809z"></path> <circle style="fill:#FF877F;" cx="410.714" cy="268.809" r="25.6"></circle> <path style="fill:#573A32;" d="M410.697,307.209c21.205,0,38.4-17.195,38.4-38.4c0-21.205-17.195-38.4-38.4-38.4 c-5.914,0-11.452,1.451-16.461,3.84L263.949,103.962l24.047-24.047c10.001-10.001,10.001-26.206,0-36.207L251.789,7.501 c-10.001-10.001-26.206-10.001-36.207,0l-48.828,48.828L83.861,72.917c-9.259,1.852-16.742,8.644-19.482,17.681 c-2.739,9.037-0.282,18.85,6.4,25.523l18.517,18.517c-7.057,8.713-11.401,19.678-11.401,31.77c0,28.279,22.921,51.2,51.2,51.2 c12.083,0,23.023-4.395,31.753-11.418l18.534,18.534c6.673,6.682,16.486,9.139,25.523,6.4c9.037-2.731,15.829-10.223,17.681-19.482 l16.58-82.91l6.673-6.682l130.287,130.287c-2.389,5.009-3.84,10.547-3.84,16.461s1.451,11.46,3.84,16.461L251.354,410.052 c-2.551-0.128-5.06-0.444-7.637-0.444c-48.213,0-92.774,22.366-122.24,61.363c-5.854,7.748-6.827,18.15-2.492,26.837 c4.318,8.704,13.201,14.199,22.912,14.199h203.639c9.711,0,18.594-5.495,22.921-14.191c4.326-8.695,3.362-19.089-2.492-26.837 c-21.282-28.16-50.483-47.479-83.191-56.141l111.462-111.471C399.245,305.758,404.783,307.209,410.697,307.209z M410.697,256.009 c7.057,0,12.8,5.743,12.8,12.8c0,7.057-5.743,12.8-12.8,12.8c-7.057,0-12.8-5.743-12.8-12.8 C397.897,261.751,403.639,256.009,410.697,256.009z M129.097,192.009c-14.114,0-25.6-11.486-25.6-25.6 c0-5.018,1.638-9.506,4.207-13.363l34.876,34.876C138.697,190.481,134.114,192.009,129.097,192.009z M215.59,116.122l-18.099,90.513 L88.879,98.014l90.513-18.099l54.298-54.306l36.207,36.207L215.59,116.122z M345.536,486.409H141.897 c23.364-30.916,60.083-51.2,101.82-51.2S322.172,455.492,345.536,486.409z"></path> </g></svg>`;
//     } else {
//         themeBtn.innerHTML = `<svg height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.009 512.009" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#8a8a8a;" d="M126.076,499.209l5.606-20.514c27.042-35.772,67.874-56.286,112.043-56.286 c44.16,0,84.992,20.514,112.026,56.286l5.606,20.514H126.076z"></path> <polygon style="fill:#b8b8b8;" points="62.912,90.155 173.077,68.122 233.698,7.509 287.996,61.807 227.375,122.428 205.342,232.593 "></polygon> <path style="fill:#ffffff;" d="M129.097,204.809c-21.171,0-38.4-17.229-38.4-38.4c0-7.142,2.202-14.217,6.357-20.454l8.661-12.988 l57.037,57.037l-13.141,8.636C143.45,202.667,136.35,204.809,129.097,204.809z"></path> <circle style="fill:#b8b8b8;" cx="410.714" cy="268.809" r="25.6"></circle> <path style="fill:#573A32;" d="M410.697,307.209c21.205,0,38.4-17.195,38.4-38.4c0-21.205-17.195-38.4-38.4-38.4 c-5.914,0-11.452,1.451-16.461,3.84L263.949,103.962l24.047-24.047c10.001-10.001,10.001-26.206,0-36.207L251.789,7.501 c-10.001-10.001-26.206-10.001-36.207,0l-48.828,48.828L83.861,72.917c-9.259,1.852-16.742,8.644-19.482,17.681 c-2.739,9.037-0.282,18.85,6.4,25.523l18.517,18.517c-7.057,8.713-11.401,19.678-11.401,31.77c0,28.279,22.921,51.2,51.2,51.2 c12.083,0,23.023-4.395,31.753-11.418l18.534,18.534c6.673,6.682,16.486,9.139,25.523,6.4c9.037-2.731,15.829-10.223,17.681-19.482 l16.58-82.91l6.673-6.682l130.287,130.287c-2.389,5.009-3.84,10.547-3.84,16.461s1.451,11.46,3.84,16.461L251.354,410.052 c-2.551-0.128-5.06-0.444-7.637-0.444c-48.213,0-92.774,22.366-122.24,61.363c-5.854,7.748-6.827,18.15-2.492,26.837 c4.318,8.704,13.201,14.199,22.912,14.199h203.639c9.711,0,18.594-5.495,22.921-14.191c4.326-8.695,3.362-19.089-2.492-26.837 c-21.282-28.16-50.483-47.479-83.191-56.141l111.462-111.471C399.245,305.758,404.783,307.209,410.697,307.209z M410.697,256.009 c7.057,0,12.8,5.743,12.8,12.8c0,7.057-5.743,12.8-12.8,12.8c-7.057,0-12.8-5.743-12.8-12.8 C397.897,261.751,403.639,256.009,410.697,256.009z M129.097,192.009c-14.114,0-25.6-11.486-25.6-25.6 c0-5.018,1.638-9.506,4.207-13.363l34.876,34.876C138.697,190.481,134.114,192.009,129.097,192.009z M215.59,116.122l-18.099,90.513 L88.879,98.014l90.513-18.099l54.298-54.306l36.207,36.207L215.59,116.122z M345.536,486.409H141.897 c23.364-30.916,60.083-51.2,101.82-51.2S322.172,455.492,345.536,486.409z"></path> </g></svg>`;
//     }
//     root.setAttribute('color-scheme', `${theme}`);
// }

// themeBtn.addEventListener('click', () => {
//     let theme = getCurrentTheme();
//     let audio;
//     if(theme === 'dark'){
//         audio = document.querySelector('.theme-audio--light-on');
//         theme = 'light';
//     } else {
//         audio = document.querySelector('.theme-audio--light-off');
//         theme = 'dark';
//     }
//     audio.currentTime = 0;
//     audio.play();
//     localStorage.setItem('wispydutchess.theme', `${theme}`);
//     loadTheme(theme);
// })

// window.addEventListener('DOMContentLoaded', () => {
//     loadTheme(getCurrentTheme());
// })
