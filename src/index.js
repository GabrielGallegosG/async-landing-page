const API = process.env.API;

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
        ${videos.contents
          .map(
            (video) => `<div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
          <img src="${video.video.thumbnails[0].url}" alt="" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.video.title}
          </h3>
        </div>
      </div>`
          )
          .slice(0, 4)
          .join("")}
      `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
    //content.appendChild = "<h1>Hubo un error al extraer los videos</h1>";
  }
})();
