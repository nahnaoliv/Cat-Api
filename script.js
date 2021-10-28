const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const btn = document.getElementById('change-cat');

const getCats = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
    return data.webpurl;
};

const loadImg = async() => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCats();
};
loadImg();

btn.addEventListener('click', loadImg);