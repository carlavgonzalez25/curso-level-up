import { ApiResponse, Result } from "./types/types";

const API_KEY = "5c95e67a285df52717b9d9c7a977eabb";

const submitBtn = document.getElementById("submitBtn") as HTMLElement;
const input = document.getElementById("input") as HTMLInputElement;
const resultsContainer = document.getElementById(
  "results-container"
) as HTMLElement;

submitBtn?.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("event : ", event);
  if (input.value) {
    try {
      const response = await fetchMovies(input.value);
      resultsContainer.innerHTML = "";
      let resultHTML = "";

      if (response.results.length) {
        response.results.forEach((result: Result) => {
          resultHTML += `
                    <div class='single-result'>
                        <h2>${result.original_title}</h2>
                        <p>Fecha de lanzamiento: ${result.release_date}</p>
                        <p> Resumen: ${result.overview} </p>
                    </div>
                    `;
          resultsContainer.innerHTML = resultHTML;
        });
      } else {
        resultHTML = "<h4> No se encontraron resultados </h4>";
        resultsContainer.innerHTML = resultHTML;
      }
    } catch (error) {
      console.error(error);
    }
  }
});

async function fetchMovies(query: string): Promise<ApiResponse> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzk1ZTY3YTI4NWRmNTI3MTdiOWQ5YzdhOTc3ZWFiYiIsInN1YiI6IjY1ZWYzOWYwOTU2NjU4MDE4NjZmOWEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EpklYsBRXhTx4tpGxTREpkMUILWjmKP6DqwoFTDlcNQ",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw Error;
  }
}
