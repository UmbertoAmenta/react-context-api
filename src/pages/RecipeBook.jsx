import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// components
import PostCard from "../components/PostCard/PostCard";
import Search from "../components/Search";

const initialData = {
  titolo: "",
  contenuto: "",
  immagine: "",
  dellaTradizione: false,
  difficoltà: "",
  tempistiche: "",
};

export default function RecipeBook() {
  const [list, setList] = useState([]);

  const onlyAdmin = useLocation();

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then(function (response) {
      setList(response.data);
    });
  };

  // ha effetto solo sul client
  const deleteList = () => setList([]);

  useEffect(fetchPosts, []);

  return (
    <>
      <div className="container book">
        <div>
          <h2>Il Ricettario</h2>
          <Search recipes={list} />
          {onlyAdmin.pathname === "/recipe-book" && (
            <Link to="/admin/login" className="btn-login">
              Login
            </Link>
          )}
        </div>
        <div className="flex">
          <ul>
            {list.map((post) => {
              return (
                <PostCard
                  key={post.id}
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
        </div>
      </div>
    </>
  );
}
