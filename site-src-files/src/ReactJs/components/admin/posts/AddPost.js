import React from 'react';
import { addPost } from '../../../api_calls/Posts';
import Layout from '../../layouts/Layout';
import { getToken } from '../../../app_functions/GetCookies';

class AddPost extends React.Component {

    checkClicked = (component) => {
        let returnVal;
        if(!component.checked) {
            returnVal = 0;
        } else {
            returnVal = 1;
        }

        return returnVal;
    }

    getElement = (id) => {
        return document.getElementById(id);
    }

    

    checkCategories = () => {
        let total = [];
        let music, sport, artsculture, entertainment;
        let elements = [music, sport, artsculture, entertainment];
        let elementNames = ['music', 'sport', 'artsculture', 'entertainment'];
        for (let i = 0; i < 4; i++) {
            elements[i] = this.getElement(elementNames[i]);
        }
        
        for(let i = 0; i < 4; i++) {
            if(elements[i].checked) {
                total.push(parseInt(elements[i].value))
            }    
        }
        return total.length?total.join(','):"";
    }

    savePost = (e) => {
        
        e.preventDefault();

        const data = {
            post_title: this.post_title,
            post_category_id: this.post_category_id,
            post_thumbnail_url: this.post_thumbnail_url,
            post_content: this.post_content,
            description: 'this is a description',
            isLive: this.checkClicked(this.getElement('isLive')),
            post_slug: this.post_slug,
            noPersonWatching: 1,
            categories: this.checkCategories()
        }
        
        addPost(data, getToken());
        console.log(data);
    }

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
                        <div>
                            <label>Categories: </label>
                            <label htmlFor = "music">Music: </label>
                            <input type="radio" id="music" name="music" value="1" />
                            <label htmlFor = "sport">Sport: </label>
                            <input type="radio" id="sport" name="sport" value="2" />
                            <label htmlFor = "artsculture">Arts and Culture: </label>
                            <input type="radio" id="artsculture" name="artsculture" value="3" />
                            <label htmlFor = "entertainment">Entertainment: </label>
                            <input type="radio" id="entertainment" name="entertainment" value="4" />
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            )
            
        }

        return (
            <div>
                <Layout Content = {Content}>

                </Layout>
            </div>
        )
    }
}

export default AddPost;