import React, { Component } from 'react'
import CategoryContent from './categoryContent';

import { getAllCategory, getCategoryContent } from './utils'

export default class Container extends Component {

    constructor() {
        super();
        this.content = []
        this.state = {
            category: [],
            editMode: ""
        };
    }

    updateContent = (content_id) => {
        this.content[content_id].assignContent()
    }

    callbackEdit = (content_id) => {
        this.setState({ editMode: content_id })
    }

    componentDidMount = () => {
        getAllCategory().then((res) => this.setState({ category: res }))
    }

    render() {
        const { category, category_content, editMode } = this.state;
        
        return (
            <>
                {category.map((e) =>
                    <div>
                        <div style={{ backgroundColor: "red" }}>
                            <label>ID: {e.ID}</label> <br></br>
                            <label>Name: {e.NAME}</label> <br></br>
                            <label>Index: {e.INDEX}</label> <br></br>
                            <CategoryContent
                                category_id={e.ID}
                                editMode={editMode}
                                callbackEdit={this.callbackEdit}
                                ref={ref => (this.content[e.ID] = ref)}
                                updateContent={this.updateContent}
                            />
                        </div>
                    </div>
                )}
            </>
        )
    }
}
