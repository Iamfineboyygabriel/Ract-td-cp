import React from 'react'; 
import '../Components/title.css'; 


const PageTitle = ({ children, ...rest }) => {
  return (
    <p className="title" {...rest}>{children}</p> 
  )
};

export default PageTitle;
