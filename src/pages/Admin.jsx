import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// components
import PostCard from "../components/PostCard/PostCard";
import FormPostList from "../components/FormPostList";
import NewPostAlert from "../components/NewPostAlert";

// contexts
import { useNewPostContext } from "../components/contexts/NewPostContext";

const initialData = {
  titolo: "",
  contenuto: "",
  immagine: "",
  dellaTradizione: false,
  difficoltà: "",
  tempistiche: "",
};

export default function Admin() {
  const [formData, setFormData] = useState(initialData);
  const [list, setList] = useState([]);
  const { setNewPost } = useNewPostContext();

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then(function (response) {
      setList(response.data);
    });
  };

  const handlerSubmitFormData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/posts", formData)
      .then(function (response) {
        const currentList = [...list, response.data];
        setList((currentList) => [...currentList, response.data]);
        setFormData(initialData);
        setNewPost(response.data);
      });
  };

  const handlerDeletePost = (postId) => {
    axios.delete(`http://localhost:3000/posts/${postId}`).then(() => {
      setList((currentList) =>
        currentList.filter((post) => post.id !== postId)
      );
    });
  };

  // ha effetto solo sul client
  const deleteList = () => setList([]);

  useEffect(fetchPosts, []);

  const handlerFormData = (field, value) => {
    setFormData((currentFormData) => {
      return { ...currentFormData, [field]: value };
    });
  };

  return (
    <>
      <div className="container admin">
        <h2>Il Ricettario</h2>
        <Link to="/" className="btn-logout">
          Logout
        </Link>
        <div className="flex">
          <ul>
            {list.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  // post={post}
                  id={post.id}
                  titolo={post.titolo}
                  contenuto={post.contenuto}
                  immagine={post.immagine}
                  dellaTradizione={post.dellaTradizione}
                  difficoltà={post.difficoltà}
                  tempistiche={post.tempistiche}
                  handlerDeletePost={() => handlerDeletePost(post.id)}
                />
              );
            })}
          </ul>
          <div>
            <FormPostList
              formData={formData}
              handlerSubmitFormData={handlerSubmitFormData}
              handlerFormData={handlerFormData}
              deleteList={deleteList}
            />
            <NewPostAlert />
          </div>
        </div>
      </div>
    </>
  );
}
