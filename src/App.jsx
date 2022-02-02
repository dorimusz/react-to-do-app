import { useState } from 'react';
import './App.css';

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

function App() {
  const [blogposts, setBlogposts] = useState([]);

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const postBlogpost = () => {
    setBlogposts([...blogposts, {
      title: inputTitle,
      content: inputContent,
      date: new Date().toString()
    }]);
    setInputTitle("");
    setInputContent("")
  }

  const deleteBlogposts = () => {
    setBlogposts([]);
  }

  const removeBlogpost = (uid) => {
    console.log("Most törölném");
    console.log(uid);

    /*
    const newListState = [];

    for (let blog of blogposts) {
      if (blog.date !== uid) {
        newListState.push(blog)
      }
    }

    setBlogposts(newListState)
    */

    setBlogposts(blogposts.filter((post) => post.date !== uid))
  }

  return (
    <main>
      <div className='editor'>
        <input type="text" placeholder='Title' value={inputTitle} onChange={(event) => setInputTitle(event.target.value)} />
        <input type="text" placeholder='Content' value={inputContent} onChange={(event) => setInputContent(event.target.value)} />
        <button
          onClick={postBlogpost}>
          Add post
        </button>
      </div>

      <h1>Blogposztjaim</h1>

      {/* {sampleData[0].title} */}
      {blogposts.map((blogpost, index) => (
        <article key={index}>
          <h2>{blogpost.title}</h2>
          <h4>{blogpost.date}</h4>
          <p>{blogpost.content}</p>

          <input type="text" placeholder='Title' />
          <input type="text" placeholder='Content' />
          <button>Save</button>
          <button>Cancel</button>
          <button>Edit</button>
          <button onClick={() => removeBlogpost(blogpost.date)}>Remove</button>
        </article>
      ))}

      <button onClick={deleteBlogposts}>Delete all</button>

    </main>
  );
}

export default App;
