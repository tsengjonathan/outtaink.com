export const repoName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME

export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`

export const accessToken = process.env.API_TOKEN

export const linkResolver = (doc) => {
  if (doc.type === "article") {
    return `/${doc.uid}`;
  }

  return "/";
};

export const Router = {
  routes: [{
    type: "article",
    path: "/:uid",
  }],
};
