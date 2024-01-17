const canvas = new fabric.Canvas('c');

const upload = document.querySelector('input');

upload.addEventListener('change', ({ target }) => {
    const file = target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', ({ target }) => {
        const img = document.createElement("img");
        img.src = target.result;

        const imageInstance = new fabric.Image(img);

        canvas.setDimensions({ ...imageInstance })
        canvas.setBackgroundImage(imageInstance, canvas.renderAll.bind(canvas))
    })

    reader.readAsDataURL(file)

})

function addText() {
    const text = new fabric.IText('hello world', { fontFamily: 'sans-serif', fontSize: 16, top: 100, left: 200 });
    canvas.add(text);
}

function exportJSON() {
    navigator.clipboard.writeText(JSON.stringify(canvas))
}

function download() {
    const url = canvas.toDataURL();
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = true;

    anchor.click()
}