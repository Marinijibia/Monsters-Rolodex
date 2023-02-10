import { Component } from "react";

import './Search-box.style.css';

class SearchBox extends Component{
    render() {

        const { onSearchHandler, className, placeholder, search } =this.props;

        return (
          <div>
            <input
              className={`search-box ${className }`}
              placeholder={placeholder}
              type={search}
              onChange={onSearchHandler}
            />
          </div>
        );
    }
}


export default SearchBox;