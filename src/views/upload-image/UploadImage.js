import React from 'react'
import { Card } from 'react-bootstrap'
import UploadButton from './UploadButton'

const UploadImage = props => {
  return (
    <div className="view">
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title>Select file</Card.Title>
          <Card.Text>
            Upload a photo or audio file you wish to encode with a message
            or extract a message from.
          </Card.Text>
          <UploadButton />
        </Card.Body>
      </Card>
    </div>
  )
}

const styles = {
  card: {
    width: '18rem',
    marginTop: '9rem',
    alignSelf: 'center'
  }
}

export default UploadImage