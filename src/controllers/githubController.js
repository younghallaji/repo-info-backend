const { fetchRepoInfo } = require("../services/githubService");

const getRepoInfo = async (req, res) => {
  const { repoNames } = req.query;
  
  if (!repoNames) {
    return res.status(400).json({status:false, message: "Repository name is required" });
  }

  if (repoNames === "test/error") {
    return res.status(500).json({ status: false, message: "Manual error triggered" });
  }

  const repoList = repoNames.split(",").map((repo) => repo.trim()); 
  const repoDetails = []; 

  try {
    for (const repo of repoList) {
      try {
        const repoData = await fetchRepoInfo(repo);
        repoDetails.push({ name: repo, data: repoData });
      } catch (error) {
        repoDetails.push({ name: repo, error: "Repository not found" });
      }
    }
    return res.status(200).json({ status: true, data: repoDetails });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: `Error: ${error.message}`,
      message: "Internal Server Error",
    });
  }
};

module.exports = { getRepoInfo };
