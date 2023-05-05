import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(1996)
  const [showNewPage, setShowNewPage] = useState(false)

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((count) => {
        if (count < 2023) {
          return count + 1
        } else {
          clearInterval(countInterval)
          return count
        }
      })
    }, count === 1996 ||count === 2021 ||  count === 2022 || count === 2023 ? 2000 : 200)
    return () => clearInterval(countInterval)
  }, [count])

  useEffect(() => {
    if (count === 2023) {
      setTimeout(() => setShowNewPage(true), 10)
    }
  }, [count])

  let history
  if (count < 2000) {
    history = 'Was Born'
  } else if (count >= 2000 && count <= 2004) {
    history = 'Started School'
  } else if (count > 2004 && count <= 2007) {
    history = 'Learnt to ride a bike'
  } else if (count > 2007 && count <= 2014) {
    history = 'Played basket ball'
  } else if (count > 2014 && count <= 2018) {
    history = 'Graduated HighSchool'
  } else if (count > 2018 && count <= 2021) {
    history = 'JKUAT BSC Information Technology Graduate'
  } else if (count === 2022) {
    history = 'Joined Moringa to Study Software Engineering'
  } else if (count === 2023) {
    history = 'Job Hunting - Hire Me'
  }

  return (
    <>
      {!showNewPage ? (
        <div className='landing_counter_container'>
          <div className='landing_counter'>
            {count}
            <hr />
            {history}
          </div>
        </div>
      ) : (
        <>
        
        <div className='new-page'>
        <Navbar />
       
       
          <section className='home_container'>
           
            <div className='text_about_me'> 
            <h1>Hello Folks</h1>
            <div className='profession'>
              <span>I am Emmanuel, a junior fullstack software engineer. <br /> I love to solve problems.</span> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia provident corrupti facere nesciunt beatae exercitationem doloremque officiis, rem labore vel! Beatae ut molestiae quasi esse. Facere sapiente soluta quos ratione deleniti praesentium. Tempore delectus voluptatum eos doloremque distinctio. Veniam impedit fugiat voluptatibus atque iusto iste debitis. Saepe temporibus obcaecati quod.</p> </div>
            <div className='my_image'>
              
              <img src="../public/profile.jpg" alt="" />
            </div>
            </section>
          {/* Your new page content goes here */}
        </div>
        </>
      )}
    </>
  )
}

export default App
