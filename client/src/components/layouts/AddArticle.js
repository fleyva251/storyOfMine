import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorName] = useState('');

const changeOnClick = (e) => {
    e.preventDefault();

    const articles = {
        title,
        article,
        authorname
    }

    axios.post("/articles/add", articles)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

    return (
        <AddArticleContainer>
<div className="container">
    <h1>Add New Story</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="authorname">Author Name</label>
    <input type="text" 
    onChange={e => setAuthorName(e.target.value)}
    className="form-control"  
    placeholder="Author Name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" 
    onChange={e => setTitle(e.target.value)}
    className="form-control" 
    placeholder="Title"
    />
  </div>
  <div className="form-group">
    <label htmlFor="article">Story</label>
    <textarea onChange={e => setArticle(e.target.value)} className="form-control" rows="5"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Post Story</button>
</form>
            </div>
        </AddArticleContainer>
    )
}

export default AddArticle

//Main container

const AddArticleContainer = styled.div `
margin: 3rem auto;
padding: 4rem;
width: 31.25rem;

h1{
    font-weight: 900;
    color: var(--dark-blue)
}

.btn-primary{
    margin-top: 2rem;
    background: var(--dark-blue);
    border: none;
    &:hover{
        background: var(--light-blue)
    }
}
`;