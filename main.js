document.addEventListener("DOMContentLoaded", function () {
    const videoContainers = document.querySelectorAll('.video-container');
    const styles = ['video1', 'video2', 'video3', 'video4'];
    let counter = 0;
    videoContainers.forEach((container, index) => {
        container.classList.add(styles[counter]);
        counter++;
        if (counter > 3) {
            counter = 0;
        }
    });
});
