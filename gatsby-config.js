module.exports = {
  plugins: [
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-preload-fonts",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800
            }
          },
          {
            resolve: "gatsby-remark-code-buttons",
            options: {
              toasterDuration: 5000,
              toasterText: "copied!",
              svgIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: `${__dirname}/src/`,
        images: `${__dirname}/src/assets/images`
        // 여기에 추가적인 경로 별칭(alias)를 설정할 수 있습니다.
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malog`,
        display: `standalone`,
        icon: `./src/assets/flare.svg`
      }
    },
    "gatsby-plugin-react-helmet"
    // {
    //   resolve: "gatsby-plugin-fusejs",
    //   options: {
    //     path: "public/fuse.json",
    //     fields: ["title", "content", "categories"],
    //     async items({ graphql }) {
    //       const { data } = await graphql(`
    //         query {
    //           allMarkdownRemark {
    //             nodes {
    //               frontmatter {
    //                 title
    //                 categories
    //               }
    //               html
    //             }
    //           }
    //         }
    //       `);
    //       return data.allMarkdownRemark.nodes.map((node) => ({
    //         title: node.frontmatter.title,
    //         content: node.html,
    //         categories: node.frontmatter.categories.join(" ")
    //       }));
    //     }
    //   }
    // }
  ]
};
