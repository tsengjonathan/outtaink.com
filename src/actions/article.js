const currentDate = new Date();

const articleContent = 
`---
title: 
date: '${currentDate.toISOString()}'
cover: 
---
`

module.exports = async ({ github, context, endpoint }) => {
  const defaultArgs = {
    owner: context.repo.owner,
    repo: context.repo.repo
  }

  console.log("Endpoint", endpoint)

  const { data: { commit: branch } } = await github.repos.getBranch({
    ...defaultArgs,
    branch: endpoint
  })

  const { data: blob } = await github.git.createBlob({
    ...defaultArgs,
    content: articleContent
  })

  const { data: tree } = await github.git.createTree({
    ...defaultArgs,
    tree: [{
      path: `content/articles/${endpoint}/index.md`,
      mode: "100644",
      type: "blob",
      sha: blob.sha
    }],
    base_tree: branch.commit.tree.sha
  })

  const { data: commit } = await github.git.createCommit({
    ...defaultArgs,
    message: "Initialize file",
    tree: tree.sha,
    parents: [branch.sha],
    author: {
      name: context.actor
    }
  })

  await github.git.updateRef({
    ...defaultArgs,
    ref: `heads/${endpoint}`,
    sha: commit.sha,
  })
}