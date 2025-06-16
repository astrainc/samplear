// A-Frameが読み込まれたらvideoをa-videoにセット
window.addEventListener('DOMContentLoaded', () => {
    const videoEl1 = document.querySelector('#video1');
    const videoPlane1 = document.querySelector('#video-plane1');
    videoPlane1.setAttribute('src', '#video1');

    const videoEl2 = document.querySelector('#video2');
    const videoPlane2 = document.querySelector('#video-plane2');
    videoPlane2.setAttribute('src', '#video2');
});