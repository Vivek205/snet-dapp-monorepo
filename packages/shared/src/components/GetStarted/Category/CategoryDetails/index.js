import React from "react";
import ParseHTML from "html-react-parser";

import StyledButton from "../../../StyledButton";

const Description = ({ content }) => <p>{ParseHTML(content)}</p>;

const Subheading = ({ content }) => <p>{ParseHTML(content)}</p>;

const ListHeading = ({ content }) => <span>{ParseHTML(content)}</span>;

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>{ParseHTML(item)}</li>
    ))}
  </ul>
);

const CategoriesSubComponents = {
  "description": props => <Description {...props}/>,
  "subheading": props => <Subheading {...props} />,
  "listHeading": props => <ListHeading {...props} />,
  "list": props => <List {...props} />,
  "button": props => <StyledButton {...props} />
}

const CategoryDetails = ({ classes, type, value }) => {   
  const CategorySubComponent = CategoriesSubComponents[type]
  if(CategorySubComponent){
    return <CategoriesSubComponents content={value} key={type}/>
  }
  return null;
};

export default CategoryDetails;
