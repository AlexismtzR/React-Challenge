import React  from 'react';

const Comment = ({body, name, email}) => {

    return(
        <div>
        <p>
            <span style={{fontWeight:"500", marginRight:"8px"}}>{name}:</span>
            {body}
        </p>
        <p>
            <span style={{fontWeight:"500", marginRight:"4px"}}>Email:</span>
            {email}
        </p>
         </div>  
    )

}

export default Comment;