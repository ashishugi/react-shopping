import React from "react";

import {Row,Col,Container} from 'react-bootstrap';
import {FilterWrapper,FilterResult,FilterSize,FilterSort} from "../style";
function Filter(props){
    return (
        <FilterWrapper>
            <Row >
                    <FilterResult>{props.count} Products </FilterResult>
                    <FilterSort>
                        Order &nbsp;
                        <select value={props.sort} onChange={props.sortProducts}>
                            <option>Latest </option>
                            <option value="lowest">lowest</option>
                            <option value="highest">highest</option>
                        </select>
                    </FilterSort>
                    <FilterSize>Filter &nbsp;
                        <select value={props.size} onChange={props.filterProducts}>
                            <option value="">ALL</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </FilterSize>
            </Row>
        </FilterWrapper>
    );
}

export default Filter;