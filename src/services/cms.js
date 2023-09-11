import { apiBaseUrl } from "../assets/js/blogConfig";

export const fetchRoadmapData = async () => {
    const res = await fetch(`${apiBaseUrl}roadmap?_embed=true&per_page=1000`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((res) => {
        return res;
    })
    .catch((error) => {
        console.log("Error when trying to get roadmap details", error);
        return error;
    });

    return res;
};