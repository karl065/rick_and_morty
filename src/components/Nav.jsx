/* eslint-disable react/prop-types */
import SearchBar from './SearchBar/SearchBar';

export default function Nav(props) {
  const onSearch = props.onSearch;

  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
