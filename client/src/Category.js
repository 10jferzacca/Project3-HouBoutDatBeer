import React, { Component } from "react"

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            category: this.props.match.params.category,
            posts: []
         }
    }
    componentDidMount() {
        fetch('http://localhost:3000/posts')
        .then(response => {
           return response.json()
        }).then(res => {
            console.log(res)
                const items = res.filter(item => item.category === this.state.category);
                this.setState({
                  posts: items
                });
            })
        
           
        
    }
    render() { 
      return( 
      <div><div className="cat"><h1 className="categoryH">{this.state.category}</h1></div>
        {this.state.posts.map((post, index) => {
                return (
                    <div>
                         
                   
                  <div className='post'>
                    <div className='inner' key={index}>
                      <div className='top'>
                        <h2 className='beerTitle'>{post.title}</h2>
                      
                      </div>
                      <br />
                      <p className='postbeer'>
                        <img src={post.picture} />
                      </p>
                      <p className='caption'>{post.caption}</p>
                      <p>
                        <img
                          src='https://cdn4.iconfinder.com/data/icons/brewery-outline/128/homemade_beer_home_brew_craft_beer_brewery_fermentation_pub_4-512.png'
                          className='brewery'
                        />{' '}
                        {post.brewery}
                      </p>
                      </div>
                      </div>
                      </div>
                  
             )
         })
        
      
   
    }
       </div>
      )
}
}
 
export default Category;