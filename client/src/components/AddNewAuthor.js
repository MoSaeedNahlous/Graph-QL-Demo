import React, { Fragment, useEffect, useState } from 'react';






const AddNewAuthor = (props) => {

    const [newAuthor, setNewAuthor] = useState({
        name:'',age:0
    })

   
    const OnChangeHandler = (e) => {
        setNewAuthor({...newAuthor,[e.target.name]:e.target.value})
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        
        
        console.log(newAuthor)
        document.getElementById('AddAuthorForm').reset()
        // setNewAuthor({name:'',age:0})

    }

    return (
        <Fragment>
            <h3>Add New Author</h3>
            <form id="AddAuthorForm" onSubmit={SubmitHandler} >
                <label>Author Name:</label>
                <input type="text" name="name" required placeholder="Enter the Name" onChange={OnChangeHandler} />
                <br />
                <label>Author Age:</label>
                <input type="number" name="age" required placeholder="Enter the Age" onChange={OnChangeHandler}/>

                <br/>
                <button type="submit">Add Author</button>
            </form>
        </Fragment>
    )
}

export default AddNewAuthor
