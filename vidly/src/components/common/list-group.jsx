const ListGroup = (props) => {
    const { genres, onItemSelected, selectedGenre } = props;
    return (
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre._id}
            className={
              selectedGenre === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelected(genre.name)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
}
 
export default ListGroup;