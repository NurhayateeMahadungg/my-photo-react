import './AppSearch.css'

function AppSearch(props) {
    const { value, onValueChange } = props;
    return (
        <div className='app-search'>
          <input 
            className='app-search-input' 
            type="text"
            placeholder='พิมพ์เพื่อค้นหา'
            value={value}
            onChange={(event) => {onValueChange (event.target.value)}}
          />
        </div>
    );
}

export default AppSearch;