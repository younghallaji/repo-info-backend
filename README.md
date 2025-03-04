# GitHub Repo Info API

This is a simple Node.js and Express API that fetches details of a GitHub repository, including its name, description, and number of stars.

## Features
- Fetch details of a single GitHub repository
- Fetch details of multiple repositories (comma-separated)
- Proper error handling and rate limiting
- API documentation with Swagger

## Installation
```sh
git clone https://github.com/younghallaji/repo-info-backend.git
cd repo-info-backend
npm install

## Usage

npm start

## Endpoint
GET /github/repo_info?repoName=facebook/react
