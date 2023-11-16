const div = document.getElementById('pasteHere');

const getData = async (url) => {
    try {
        const data = await fetch("https://randomfox.ca/floof/")
        const payLoad = await data.json();
        console.log(payLoad);

        let y = `<img src = "${payLoad.image}" width="600" height="400" />`;

        div.innerHTML = y
        // console.log(y)
    } catch (error) {
        console.log(error)
    }
}
getData()