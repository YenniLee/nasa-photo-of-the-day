import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const NasaCard = props => {
  return (
    <div>
      <Card body outline color="info">
        <CardBody>
            <CardTitle>NASA Photo for <span>{props.date}</span></CardTitle>
            <CardTitle>Title: {props.title}</CardTitle>
            <CardImg top width="100%" src={props.imgUrl} alt="space photo" />
            <CardText body className="text-left">{props.desc}</CardText>
            <CardText>
            <small className="text-muted">Copyright: {props.copy}</small>
            </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default NasaCard;

