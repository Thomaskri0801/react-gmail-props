function search(props) {

  return (
    <div className="search">
          <input className="search-bar" placeholder="Search mail" onChange={e => props.handleSearch(e.target.value)}/>
        </div>
  )
}

export default search;