import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const {data,extractDataFromApi} = useFetch("","","");
  // function to perform get request
  const fetchGetMethod = (e) => {
    e.preventDefault();
    extractDataFromApi("https://dummyjson.com/posts/1","","GET");
  };
  // function to perform post request
  const fetchPostMethod = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let obj={};
    for (let [key,value] of formData.entries()) {
      Object.assign(obj,{[key]:value})
    }
    extractDataFromApi("https://dummyjson.com/posts/add",obj,"POST");
  };
  // function to perform update request
  const fetchUpdateMethod = (e) => {
    e.preventDefault();
    let id=e.target[0].value
    let title=e.target[1].value
    extractDataFromApi(`https://dummyjson.com/posts/${id}`,{title:title},"PUT");
  };
  // function to perform delete request
  const fetchDeleteMethod = (e) => {
    e.preventDefault();
    let id=e.target[0].value
    extractDataFromApi(`https://dummyjson.com/posts/${id}`,"","DELETE")
  };
  return (
    <div>
      <h2>useCustomHook Task</h2>
      <div className="fetchDivs">
        <h4>Get posts</h4>
        <button onClick={fetchGetMethod}>Get Posts</button>
      </div>
      <div className="fetchDivs">
        <h4>Add a Post</h4>
        <form onSubmit={fetchPostMethod}>
          <input placeholder="Enter User Id" name="userId" />
          <input placeholder="Enter Title" name="title" />
          <button type="submit">Add a post</button>
        </form>
      </div>
      <div className="fetchDivs">
        <h4>Update a Post</h4>
        <form onSubmit={fetchUpdateMethod}>
          <input placeholder="Enter Id of post to be updated" name="id" />
          <input placeholder="Enter Title" name="title" />
          <button type="submit">Update a post</button>
        </form>
      </div>
      <div className="fetchDivs">
        <h4>Delete a Post</h4>
        <form onSubmit={fetchDeleteMethod}>
        <input placeholder="Enter Id of post to be deleted" name="id" />
          <button type="submit">Delete a post</button>
        </form>
      </div>
      {data && <table id="customHookTable"><tbody><tr><th>Id</th><th>User Id</th><th>Title</th><th>Body</th></tr><tr><td>{data.id}</td><td>{data.userId}</td><td>{data.title}</td><td>{data.body}</td></tr></tbody></table>}
      <hr />
    </div>
  );
};

export default CustomHook;
