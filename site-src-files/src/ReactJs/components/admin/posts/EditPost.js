import React from 'react';
import Layout from '../../layouts/Layout';

class EditPost extends React.Component {
    render() {
        const Content = () => {
            return (
                <div>
                    <form onSubmit = {this.savePost}>
                        <div>
                            <label htmlFor = "title">Title: </label>
                            <input type="text" id="title" name="post_title" onChange = {e => this.post_title = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor = "categoryid">Post Category Id: </label>
                            <input type="text" id="categoryid" name="post_category_id" onChange = {e => this.post_category_id = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor = "thumbnail">Thumbnail: </label>
                            <input type="text" id="thumbnail" name="post_thumbnail_url" onChange = {e => this.post_thumbnail_url = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor = "content">Content: </label>
                            <textarea id="content" name="post_content" onChange = {e => this.post_content = e.target.value} ></textarea>
                        </div>
                        <div>
                            <label htmlFor = "islive">Is Live: </label>
                            <input type="radio" id="isLive" name="isLive" value="1" onChange = {e => this.isLive = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor = "postslug">Post Slug: </label>
                            <input type="text" name="post_slug" onChange = {e => this.post_slug = e.target.value} />
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            )
            
        }

        return (
            <div>
                <h1>Edit Post</h1>
                <Layout Content = {Content}>

                </Layout>
            </div>
        )
    }
}

export default EditPost;