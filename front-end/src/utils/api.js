const url = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
}

export const getCategories = () => (
  fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
)

export const getPosts = (category = undefined) => (
  // Get all posts, by category or not
  category
    ? fetch(`${url}/${category}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)
      .catch(e => console.log('Error: ', e))
    : fetch(`${url}/posts`, { headers })
      .then(res => res.json())
      .then(data => data)
      .catch(e => console.log('Error: ', e))
)

export const getPost = (id) => (
  // Get the details of a single post
  fetch(`${url}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const savePost = (post) => (
  // Add a new post
  fetch(`${url}/posts}`, {
    headers,
    method: "POST",
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const upVotePost = (id) => (
  // Used for voting on a post
  fetch(`${url}/posts/${id}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: 'upVote'})
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const downVotePost = (id) => (
  // Used for "down voting" on a post
  fetch(`${url}/posts/${id}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: 'downVote'})
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const updatePost = (post) => (
  // Edit the details of an existing post
  fetch(`${url}/posts/${post.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const deletePost = (id) => (
  // Sets the deleted flag for a post to 'true'.
  // Sets the parentDeleted flag for all child comments to 'true'.
  fetch(`${url}/posts/${id}`, {
    headers,
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const getComments = (id) => (
  // Get all the comments for a single post
  fetch(`${url}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const addComment = (comment) => (
  // Add a comment to a post
  fetch(`${url}/comments`, {
    headers,
    method: "POST",
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
 )

export const upVoteComment = (id) => (
  // Used for voting on a comment.
  fetch(`${url}/comments/${id}`,{
    headers,
    method: "PUT",
    body: JSON.stringify({option: 'upVote'})
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const downVoteComment = (id) => (
  // Used for "down voting" on a comment
  fetch(`${url}/comments/${id}`,{
    headers,
    method: "PUT",
    body: JSON.stringify({option: 'downVote'})
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const editComment = (comment) => (
  // Edit the details of an existing comment
  fetch(`${url}/comments/${comment.id}`,{
    headers,
    method: "PUT",
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)

export const deleteComment = (id) => (
  // Sets a comment's deleted flag to 'true'
  fetch(`${url}/comments/${id}`,{
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Error: ', e))
)