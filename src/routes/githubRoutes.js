const express = require("express");
const { getRepoInfo } = require("../controllers/githubController");

const router = express.Router();

/**
 * @swagger
 * /api/github/repo_info:
 *   get:
 *     summary: Get repository information from GitHub
 *     description: Returns repo name, description, and star count.
 *     parameters:
 *       - in: query
 *         name: repoName
 *         required: true
 *         description: GitHub repository in the format "owner/repo"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Repository details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "react"
 *                 description:
 *                   type: string
 *                   example: "A declarative, efficient, and flexible JavaScript library for building UI"
 *                 stars:
 *                   type: integer
 *                   example: 200000
 *       400:
 *         description: Missing repository name
 *       404:
 *         description: Repository not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/repo_info", getRepoInfo);

module.exports = router;
