
function loader() {
    setTimeout(function () {
        document.querySelector(".loading").classList.add("animated");
        document.querySelector(".loading").classList.add("fadeOut");
        setTimeout(function () {
            document.querySelector(".loading").classList.remove("animated");
            document.querySelector(".loading").classList.remove("fadeOut");
            document.querySelector(".loading").style.display = "none";
        }, 500);
    }, 1000);
};

export default loader();