import React, {useRef} from "react";

export default function SearchItem({search, setSearch}){
    const searchRef = useRef();
    const submitSearch = () => {
        setSearch(search);
    }

    return (
        <div style={{display:"flex", margin:"30px", justifyContent:"center", gap:"15px"}}>
          <div style={{fontSize:"20px"}}>🔎검색어를 입력해주세요</div>
          <input type="text" value={search} ref={searchRef} onChange={(e) => {setSearch(e.target.value); }}/>
          <button onClick={submitSearch}>검색</button>
        </div>
    )
}