const fetchData = async () => {
  const url = `https://xkcd.now.sh/?comic=latest`;
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    const imageEl = document.getElementById("image");
    imageEl.src = data.img;
    imageEl.alt = data.alt;
  } catch (error) {
    console.log(`Failed to fetch: ${error}`);
  }
};

fetchData();
