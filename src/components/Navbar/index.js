import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

import { Container, Category } from './styles';

class Navbar extends Component {
  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { getCategoriesRequest } = this.props;
    getCategoriesRequest();
  }

  render() {
    const { categories } = this.props;
    return (
      <Container>
        {categories.data.map(category => (
          <Category key={category.id} selected={categories.selected === category.id.toString()}>
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
          </Category>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
