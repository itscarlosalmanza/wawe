import React from "react";
import { Card, Image, Button } from "semantic-ui-react"

function CardData({ title, image, ingredients, instructions }) {
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{instructions}</Card.Meta>
                <Card.Meta>{ingredients}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button inverse color="">
                    Add to Favorites
                </Button>
                </Card.Content>
        </Card>




    );
}

export default CardData;