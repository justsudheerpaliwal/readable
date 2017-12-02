import React from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import PostsList from '../posts-list';
import CatagoryList from '../catagory-list';
import CreatePostsModal from '../create-posts';
import request from '../../utils/request';
import { setCategories, handlePostModalState } from './action';

async function fetchcategories() {
  const requestURL = `/categories`;
  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'whatever-you-want',
    },
  };
  return request(requestURL, options);
}

class PostsHome extends React.Component {
  async componentDidMount() {
    const { categories } = await fetchcategories();
    this.props.setcategories(categories);
  }
  render() {
    return (
      <div>
        <Header handlePostModalState={this.props.handlePostModalState} isPostModalOpen={this.props.isPostModalOpen}/>
        <CreatePostsModal handlePostModalState={this.props.handlePostModalState} isPostModalOpen={this.props.isPostModalOpen} />
        <CatagoryList style={{ margin: '5em', textAlign: 'center' }} categories={this.props.categories} />
        <PostsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { postHome } = state;
  return {
    categories: postHome && postHome.categories,
    isPostModalOpen: postHome && postHome.isPostModalOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setcategories: data => dispatch(setCategories(data)),
    handlePostModalState: data => dispatch(handlePostModalState(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsHome);


