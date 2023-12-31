import React from 'react';




const Course = ({ course }) => {
    const Header = ({ name }) => {
        return (
          <h1>{name}</h1>
        )
      }
      
      const Content = ({ parts }) => {
        return (
          <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
          </div>
        )
      }
      
      const Part = ({ part }) => {
        return (
          <p>
            {part.name} {part.exercises}
          </p>
        )
      }
      
      const Total = ({ parts }) => {
        const total = parts.reduce((sum, part) => sum + part.exercises, 0)
      
        return (
          <p><strong>Number of exercises {total}</strong></p>
        )
      }
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course;