import React, { Component } from 'react';
import demoimage from '../../images/demoimage.jpg'
import './SearchField.css'

class SearchField extends Component {
    render() {
        return (
            <div className="containerSearch" style={{ marginTop: 50 }}>
                <img src={demoimage} className="mx-auto d-block" alt="demoimage" width="100%"/>
                <div className="centered" style={{width: "60%"}}>
                    <form>
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchField;