const axios = require("axios");

const fetchRepoInfo = async (repoNames) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repoNames}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/json", 
      },
    });

    return {
      name: response.data.name,
      description: response.data.description || "No description available",
      stars: response.data.stargazers_count,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Repository not found");
    }
    throw new Error(`Failed to fetch repository data`);
  }
};

module.exports = { fetchRepoInfo };
