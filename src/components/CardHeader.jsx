import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardHeader({ title, description, buttonText }) {
  return (
    <div className="card-header">
      <Card className="p-1">
        <Card.Body>
          <Card.Title className="mb-4">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Header className="text-end pt-3 pb-3">
          <Button>{buttonText}</Button>
        </Card.Header>
      </Card>
    </div>
  );
}

export default CardHeader;
