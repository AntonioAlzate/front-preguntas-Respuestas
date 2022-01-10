import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({children}) => (
  <section className='mt-5'>
    <h1>Home</h1>
    <div>
      {children}
    </div>
    <p>welcome to the question and answer app.</p>
    <Link to="/questions" className="btn btn-primary btn-lg">
      View Questions
    </Link>
  
  </section>
)
export default HomePage
