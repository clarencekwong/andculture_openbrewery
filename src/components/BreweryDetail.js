import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const BreweryDetail = ({ brewery }) => {
  return (
    <Card>
      <Card.Content>
          <Card.Header>{brewery.name}</Card.Header>
          <Card.Description>{brewery.street ? `${brewery.street},${brewery.city},${brewery.state},${brewery.postal_code}` : 'NA'}</Card.Description>
          <Card.Description><a href={brewery.website_url}>Link to website</a></Card.Description>
          <Button>Back</Button>
        </Card.Content>
    </Card>
  )
}

export default BreweryDetail
