import React, { Fragment } from 'react'

function AddNewBook() {
    return (
        <Fragment>
            <h3>Add New Book</h3>
            <form>
                <label>Book Name</label>
                <input type="text" name="bookName" />
                <br />
                <label>Book genre</label>
                <input type="text" name="bookGenre" />
                <br />
                <select >
                    <option>author 1</option>
                    <option>author 2</option>
                </select>
            </form>
        </Fragment>
    )
}

export default AddNewBook
