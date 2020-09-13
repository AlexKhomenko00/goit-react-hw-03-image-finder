import React, { Component } from "react";
import Loader from "react-loader-spinner";

import Searchbar from "./components/Searchbar";
import articlesApi from "./services/articlesApi";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    photos: [],
    loading: false,
    searchQuery: "",
    page: 1,
    showModal: false,
    largeImgUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPhotosLength = prevState.photos.length;
    const nextPhotoLength = this.state.photos.length;

    if (prevQuery !== nextQuery) {
      this.fetchFotos();
    }
    if (prevPhotosLength !== nextPhotoLength) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchFotos = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    articlesApi
      .fetchFotosWithQuery(searchQuery, page)
      .then((data) =>
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...data.hits],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  togleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  handleImgClick = (largeImgUrl) => {
    this.setState({ largeImgUrl: largeImgUrl });
    this.togleModal();
  };

  handleFormSubmit = (query) => {
    if (query === this.state.searchQuery) {
      return;
    }
    this.setState({ photos: [], searchQuery: query, page: 1 });
  };

  render() {
    const { photos, loading, showModal, largeImgUrl } = this.state;
    const isShowLoadMore = photos.length > 0 && !loading;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery photos={photos} onImgClick={this.handleImgClick} />
        {isShowLoadMore && (
          <button type="button" className="btn" onClick={this.fetchFotos}>
            Load More
          </button>
        )}
        {loading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#303f9f"
            height={100}
            width={100}
          />
        )}
        {showModal && <Modal onClose={this.togleModal} imgUrl={largeImgUrl} />}
      </>
    );
  }
}

export default App;
