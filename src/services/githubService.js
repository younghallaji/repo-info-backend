import axios from "axios";

export const fetchRepoInfo = async (repoName) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repoName}`, {
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

// Fetch all repos for an owner/organization
export const fetchAllRepos = async (owner) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${owner}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
      throw new Error(`No repositories found for user/organization '${owner}'`);
    }

    const formattedRepos = response.data.map((repo) => ({
      name: `${owner}/${repo.name}`,
      data: {
        name: repo.name || "Unknown",
        description: repo.description || "No description available",
        stars: repo.stargazers_count || 0,
      },
    }));

    return formattedRepos;
  } catch (error) {
    throw new Error(`Failed to fetch repositories for '${owner}'`);
  }
};
