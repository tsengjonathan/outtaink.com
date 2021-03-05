[![Netlify Status](https://api.netlify.com/api/v1/badges/8d3287db-9300-4155-a91e-a2576406c5ff/deploy-status)](https://app.netlify.com/sites/outtaink/deploys)

Outtaink is a community for students to voice their experiences and lessons as they embrace the challenges of studying abroad. We are a team of students studying abroad ourselves, dedicated to documenting the challenges that students studying abroad go through as they experience a complete different culture and environment.

We are currently a team of 5 (and growing!) consisting of journalists, designers, and engineers. We opted to write in traditional Chinese because all of us grew up in a Chinese-speaking background. As students (or former thereof) studying abroad ourselves, we want to use these stories to break the cultural stigma towards young adults who choose to pursue education outside of their home country, and give friends and family a better understanding of the unique challenges that many of us face.

## Infrastructure
Outtaink is built using [Gatsby](https://github.com/gatsbyjs/gatsby), a platform developed from [React](https://reactjs.org) that helps to make building websites a lot faster.

Journalists rely on a headless CMS called [Prismic](https://prismic.io) to abstract the engineering complexity out of the journalists' workflow. Content written on the Prismic platform is connected using a 3rd party source plugin [`gatsby-source-prismic`](https://github.com/angeloashmore/gatsby-source-prismic) that makes the content queryable via Gatsby's GraphQL layer.

Engineers and Designers collaborate via [Sketch](https://sketch.com) to share design specifications. Deployments go through Netlify's CI/CD process, which can trigger either from commits to the main branch or changes on the CMS platform by journalists.

The team convenes on a weekly basis virtually to prioritize tasks coming into the following week. Since most of our meetings are remote, we rely on [Asana](https://asana.com) to track progresses and engage in brief discussions.
