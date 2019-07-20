import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const Brewery = ({ brewery }) => {
  return (
    <Card>
      <Card.Content>
          <Card.Header>{brewery.name}</Card.Header>
          <Card.Description>{brewery.brewery_type}</Card.Description>
          <Card.Description>{brewery.street ? `${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}` : 'NA'}</Card.Description>
          <Card.Description><a href={brewery.website_url}>Link to website</a></Card.Description>
          <Button basic="true">More Details</Button>
        </Card.Content>
    </Card>
  )
}

export default Brewery
