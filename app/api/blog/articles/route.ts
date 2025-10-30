export async function GET() {
  try {
    const query = `
      query {
        user(username: "itsjustme27") {
          publication {
            posts(first: 10) {
              edges {
                node {
                  id
                  title
                  subtitle
                  slug
                  coverImage {
                    url
                  }
                  publishedAt
                  author {
                    name
                    profilePicture
                  }
                  readTimeInMinutes
                  content
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch from Hashnode")
    }

    const data = await response.json()

    if (data.errors) {
      console.error("Hashnode GraphQL errors:", data.errors)
      return Response.json({ error: "Failed to fetch articles", details: data.errors }, { status: 500 })
    }

    const articles = data.data?.user?.publication?.posts?.edges?.map((edge: any) => edge.node) || []

    return Response.json({ articles })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return Response.json(
      { error: "Failed to fetch articles", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

