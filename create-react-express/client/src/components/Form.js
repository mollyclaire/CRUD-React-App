import React, { useState } from 'react'

const Form = props => {

const initialFormState = { 
    id: null, 
    name: '', 
    domain: '',
    description: ''
}
// After the form is submitted, it will return to the initial, empty value.
const [course, setCourse] = useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target
    setCourse({ ...course, [name]: value })
  }

  return (
    <form onSubmit={event => {
        event.preventDefault()
        if (!course.name) return
        // The addUser function has been passed down through props, so we need to use props in order to access it in App.js
        props.addCourse(course)
        setCourse(initialFormState)
      }}>
      <label>Name</label>
      <input type="text" name="name" value={course.name} onChange={handleInputChange} />
      <label>Domain</label>
      <input type="text" name="domain" value={course.domain} onChange={handleInputChange} />
      <label>Description</label>
      <input type="text" name="description" value={course.description} onChange={handleInputChange} />
      <button>Add new course</button>
    </form>
  )
}

export default Form