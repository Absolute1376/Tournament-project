function teamsList (props) {
    return (
        <div className="bg-light border p-4 m-2">
        <p>{props.team.name}</p> 
        <p>{props.team.division}</p> 
      </div>
    )
}

export default teamsList;