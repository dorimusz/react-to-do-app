import { useState } from 'react';
import './App.css';

/*
const sampleData = [
  {
    title: "Blogposzt 1", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2022.01.12."
  },
  {
    title: "Blogposzt 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2022.01.17."
  },
  {
    title: "Blogposzt 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2022.02.01."
  }
]
*/

const BlogPost = ({ blogPost, editBlogPost, removeBlogPost }) => {
  //editor
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("")

  return (
    <article>
      <h2>{blogPost.title}</h2>
      <h4>{blogPost.date}</h4>
      <p>{blogPost.content}</p>

      <input type="text" placeholder='Title' value={editTitle} onChange={(event) => setEditTitle(event.target.value)} />
      <input type="text" placeholder='Content' value={editContent} onChange={(event) => setEditContent(event.target.value)} />

      <button>Save</button>
      <button>Cancel</button>

      <button onClick={() => {
        editBlogPost(blogPost.date, editTitle, editContent);
        setEditTitle("");
        setEditContent("");
      }}>Edit</button>

      <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
    </article>
  )
}

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  //új poszt feltöltése
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postBlogPost = () => {
    setBlogPosts([...blogPosts,
    { title: title, content: content, date: new Date().toString() }
    ]);
    setTitle("");
    setContent("")
  }

  const deleteBlogPosts = () => {
    setBlogPosts([]);
  }

  const removeBlogPost = (uid) => {
    /*
    console.log("Most törölném");
    console.log(uid);

    const newListState = [];

    for (let blog of blogposts) {
      if (blog.date !== uid) {
        newListState.push(blog)
      }
    }

    setBlogposts(newListState)
    */

    setBlogPosts(blogPosts.filter((post) => post.date !== uid))
  }


  const editBlogPost = (uniqueId, editTitle, editContent) => {
    console.log(uniqueId);

    const currenList = blogPosts;
    const nextList = [];

    //todo
    for (const post of currenList) {
      if (post.date !== uniqueId) {
        nextList.push(post);
      } else {
        nextList.push(
          { title: editTitle, content: editContent, date: post.date }
        );
      }
    }
    setBlogPosts(nextList);
  };

  return (
    <main>
      <div className='editor'>
        <input type="text" placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder='Content' value={content} onChange={(event) => setContent(event.target.value)} />
        <button onClick={postBlogPost}>Add post </button>
      </div>

      <h1>Blogposztjaim</h1>
      {blogPosts.map((blogPost, index) => (
        <BlogPost key={index} blogPost={blogPost} editBlogPost={editBlogPost} remove={removeBlogPost} />))}

      <button onClick={deleteBlogPosts}>Delete all</button>

    </main>
  );
}

export default App;
