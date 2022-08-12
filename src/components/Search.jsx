import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState(``)

  const handdleInput = e => {

    setSearch(e.target.value);
  }
  if (search === 'gen16') {
    setSearch("soy alumno de academlo")
  }

  console.log(search)
  return (
    <form>
      <div className='searchContainer'>
        <input className='input' type='text' value={search} onChange={handdleInput} />
        <button className='buttonSubmit' type="submit"><i className="fi fi-rr-search"></i></button>
      </div>
    </form>

  )
}

export default Search
