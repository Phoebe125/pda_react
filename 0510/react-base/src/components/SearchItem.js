import React, {useRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchItem({search, setSearch}){
    const searchRef = useRef();
    const submitSearch = () => {
        setSearch(search);
    }

    return (
        <div style={{display:"flex", margin:"30px auto", marginBottom:"0", width:"50%", justifyContent:"center", gap:"15px"}}>
          <div style={{fontSize:"20px", width:"auto", whiteSpace: "nowrap"}}>🔎검색어를 입력해주세요</div>
          <InputGroup className="mb-3">
          <Form.Control
            placeholder="검색어를 입력하세요"
            aria-label="검색어"
            aria-describedby="basic-addon2"
            value={search}
            ref={searchRef}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}/>
          <Button variant="outline-secondary" id="button-addon2"  onClick={submitSearch}>
            검색
          </Button>
        </InputGroup>
        </div>
    )
}