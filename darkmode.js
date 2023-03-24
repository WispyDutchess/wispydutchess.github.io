let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", "null");
};

if (darkMode === "enabled") {
    enableDarkMode();
};


darkModeToggle.addEventListener("click",() => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});

darkModeToggle.addEventListener("click", () => {
    let audio;
    if (darkMode === "enabled"){
        audio = document.querySelector(".theme-audio--light-on");
    } else {
        audio = document.querySelector(".theme-audio--light-off");        
    }
    audio.currentTime = 0;
    audio.play();
})

// darkModeToggle.addEventListener("click", () => {


//     if(darkMode === "enabled"){
//         themeBtn.innerHTML = `<svg id="lamp-off" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse id="lamp-off-s-ellipse1" rx="4.755549" ry="4.588687" transform="translate(53.326714 25.780077)" fill="#67738c" stroke-width="0"/><rect id="lamp-off-s-rect1" width="37.37694" height="3.337227" rx="0" ry="0" transform="matrix(.384421 0.328565-.64972 0.760173 54.869407 31.174542)" fill="#4f586c" stroke-width="0"/><rect id="lamp-off-s-rect2" width="8.009345" height="11.34657" rx="0" ry="0" transform="matrix(.995882 0.631494-.36595 0.577112 49.495767 22.897101)" fill="#67738c" stroke-width="0"/><ellipse id="lamp-off-s-ellipse2" rx="13.223761" ry="13.223761" transform="matrix(.811496 0.439037-.208326 0.38506 44.368627 38.803352)" fill="#626e85" stroke-width="0"/><ellipse id="lamp-off-s-ellipse3" rx="13.033839" ry="4.257721" transform="translate(55.451756 73.29136)" fill="#4f586c" stroke-width="0"/><rect id="lamp-off-s-rect3" width="22.418202" height="5.734889" rx="0" ry="0" transform="matrix(1.160976 0 0 0.721241 42.507997 69.24001)" fill="#4f586c" stroke-width="0"/><ellipse id="lamp-off-s-ellipse4" rx="13.033839" ry="4.257721" transform="translate(55.541756 69.42136)" fill="#67738c" stroke-width="0"/><rect id="lamp-off-s-rect4" width="37.37694" height="3.337227" rx="0" ry="0" transform="matrix(-.151996 0.64298-.973178-.230053 69.281098 43.732035)" fill="#4f586c" stroke-width="0"/><path id="lamp-off-s-path1" d="" fill="none" stroke="#3f5787" stroke-width="0.5"/><ellipse id="lamp-off-s-ellipse5" rx="4.514711" ry="4.514711" transform="translate(46.128487 35.743786)" fill="#8f92ac" stroke-width="0"/><path id="lamp-off-s-path2" d="M33.953984,32.70405c-.104317-.218593,2.991143-3.894591,12.596218,1.007363q9.605075,4.901954,8.971292,9.798042q3.859659-10.76201-6.025729-15.554505c-9.885388-4.792495-15.437463,4.967695-15.541781,4.7491Z" transform="translate(-.212068 0.189985)" fill="#4f586c" stroke-width="0.5"/><ellipse id="lamp-off-s-ellipse6" rx="10" ry="10" transform="matrix(.233118 0 0 0.233118 68.671703 43.895289)" fill="#67738c" stroke-width="0"/><ellipse id="lamp-off-s-ellipse7" rx="1.945278" ry="1.945278" transform="matrix(.828613 0.190081-.10261 0.447302 61.981905 67.304832)" fill="#4f586c" stroke-width="0"/></svg>`;
//     } else {
//         themeBtn.innerHTML = `<svg id="lamp-on" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse id="lamp-on-s-ellipse1" rx="4.755549" ry="4.588687" transform="translate(53.326714 25.780077)" fill="#91afec" stroke-width="0"/><rect id="lamp-on-s-rect1" width="37.37694" height="3.337227" rx="0" ry="0" transform="matrix(.384421 0.328565-.64972 0.760173 54.869407 31.174542)" fill="#6d83af" stroke-width="0"/><rect id="lamp-on-s-rect2" width="8.009345" height="11.34657" rx="0" ry="0" transform="matrix(.995882 0.631494-.36595 0.577112 49.495767 22.897101)" fill="#91afec" stroke-width="0"/><ellipse id="lamp-on-s-ellipse2" rx="13.223761" ry="13.223761" transform="matrix(.811496 0.439037-.208326 0.38506 44.368627 38.803352)" fill="#d2dbed" stroke-width="0"/><ellipse id="lamp-on-s-ellipse3" rx="13.033839" ry="4.257721" transform="translate(55.451756 73.29136)" fill="#7c96ca" stroke-width="0"/><rect id="lamp-on-s-rect3" width="22.418202" height="5.734889" rx="0" ry="0" transform="matrix(1.160976 0 0 0.721241 42.507997 69.24001)" fill="#7c96ca" stroke-width="0"/><ellipse id="lamp-on-s-ellipse4" rx="13.033839" ry="4.257721" transform="translate(55.541756 69.42136)" fill="#91afec" stroke-width="0"/><rect id="lamp-on-s-rect4" width="37.37694" height="3.337227" rx="0" ry="0" transform="matrix(-.151996 0.64298-.973178-.230053 69.281098 43.732035)" fill="#6d83af" stroke-width="0"/><path id="lamp-on-s-path1" d="" fill="none" stroke="#3f5787" stroke-width="0.5"/><ellipse id="lamp-on-s-ellipse5" rx="4.514711" ry="4.514711" transform="translate(46.128487 35.743786)" fill="#efd9a0" stroke-width="0"/><path id="lamp-on-s-path2" d="M24.741916,32.442977q0,0-37.418395,25.833281v46.506405h64.521042L46.243431,43.170204c.298325-4.586852-5.880619-8.49201-8.905297-10.172576-7.678056-4.266067-12.786223-.652448-12.596218-.554651Z" transform="translate(9 0)" fill="rgba(216,165,30,0.42)" stroke-width="0.5"/><path id="lamp-on-s-path3" d="M33.953984,32.70405c-.104317-.218593,2.991143-3.894591,12.596218,1.007363q9.605075,4.901954,8.971292,9.798042q3.859659-10.76201-6.025729-15.554505c-9.885388-4.792495-15.437463,4.967695-15.541781,4.7491Z" transform="translate(-.212068 0.189985)" fill="#7c96ca" stroke-width="0.5"/><ellipse id="lamp-on-s-ellipse6" rx="10" ry="10" transform="matrix(.233118 0 0 0.233118 68.671703 43.895289)" fill="#7c96ca" stroke-width="0"/><ellipse id="lamp-on-s-ellipse7" rx="1.945278" ry="1.945278" transform="matrix(.828613 0.190081-.10261 0.447302 61.981905 67.304832)" fill="#6d83af" stroke-width="0"/></svg>`;
//     }
// });