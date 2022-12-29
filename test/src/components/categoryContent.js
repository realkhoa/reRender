import React, { Component } from 'react'
import {Input} from 'antd'

import {isEmpty} from 'lodash'
import { getAllCategory, getCategoryContent, updateCategoryID } from './utils'

class CategoryContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_content: [],
            editMode: ""
        };
    }

    assignContent = () => {
        getCategoryContent(this.props.category_id)
            .then(res => { this.setState({ category_content: res });})
    }

    componentDidMount = () => {
        this.assignContent()
    }


    render() {
        const { category, category_content } = this.state;
        const { editMode, callbackEdit, updateContent } = this.props;
        if (isEmpty(category_content)) return null;
        return (
            <>
            {
                category_content.map(e =>
                    <div style={{backgroundColor: "cyan"}}>
                        <p>ID: {e.ID}</p>
                        <p>Name: {e.NAME}</p>
                        {editMode != e.ID 
                            ? <p onClick={() => callbackEdit(e.ID)}>Category_ID: {e.CATEGORY_ID}</p> 
                            : <Input 
                                onPressEnter={(v) => {
                                    updateCategoryID(e.ID, v.target.value); 
                                    callbackEdit(""); this.assignContent();
                                    updateContent(v.target.value)
                                }}/>
                        }
                    </div>
                )
            }
            </>
        )
    }
}

export default CategoryContent;