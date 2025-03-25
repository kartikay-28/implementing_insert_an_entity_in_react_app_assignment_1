import React,{ useState } from 'react';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Book Added: ${title} by ${author}`);
    };

    return (
        <div className="add-book-container">
            <h1>Add a New Book</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                />

                <label>Author:</label>
                <input 
                    type="text" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    required
                />

                <label>Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                />

                <label>Cover Image URL:</label>
                <input 
                    type="url" 
                    value={coverImage} 
                    onChange={(e) => setCoverImage(e.target.value)} 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddBook;
