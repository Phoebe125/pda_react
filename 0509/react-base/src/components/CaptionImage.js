import React from "react";

// function CaptionImage(props) {
//     return (
//         <div>
//             <img src={props.imgUrl} alt={props.caption}></img>
//             <p>{props.caption}</p>
//         </div>    
//     )
// }

// export {CaptionImage};

// props 없이 사용하는 방법 (위의 방법과 동일함)
export default function CaptionImage({imgUrl, caption="기본값"}) {
    return (
        <div>
            <img src={imgUrl} alt={caption}></img>
            <p>{caption}</p>
        </div>    
    )
}
