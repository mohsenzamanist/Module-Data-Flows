const fetchData = async () => {
  const url = `https://xkcd.now.sh/?comic=latest`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageEl = document.getElementById("image");
    imageEl.src = data.img;
    imageEl.alt = data.alt;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

fetchData();
