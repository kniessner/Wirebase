import axios from 'axios';
import WPAPI from 'wpapi' ;
export const wp = new WPAPI({ endpoint: 'http://kniessner.com/complex/wp-json' });


export function getPosts() {
    // Callbacks
    wp.posts().perPage( 20 ).get(function( err, data ) {
        if ( err ) {
            // handle err
        }
        // do something with the returned posts
        return data;
    });
}



export function getPages() {
    // Callbacks
    wp.pages().perPage( 20 ).get(function( err, data ) {
        if ( err ) {
            // handle err
        }
        // do something with the returned posts
        return data;
    });
}

/*
export class wp_Api {

    constructor() {
        const appUrl = 'http://kniessner.com/complex/'; // Wordpress installation url
        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }

    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}
*/
