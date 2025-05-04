import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebars from "./components/Sidebars";
import "./App.css";
import Createpost from "./components/Createpost";
import Post from "./components/Post";
import { useState } from "react";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedtab, setselectedtab] = useState();
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebars
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebars>
        <div className="content">
          <Header></Header>
          {selectedtab == "Home" ? (
            <PostList></PostList>
          ) : (
            <Createpost></Createpost>
          )}

          <Footer className="footer-style"></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
