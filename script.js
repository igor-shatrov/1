M.AutoInit();

function handleButtonClick(className) {
    document.querySelector("." + className).scrollIntoView({ block: "start", behavior: "smooth" });
}

document.querySelector('.blk-1-href').addEventListener('click', () => { handleButtonClick('block-1') });