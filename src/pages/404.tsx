import * as React from 'react'
import type { FC } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <Container>
        <h1>404: Not Found</h1>
        <p>The requested URL was not found on this server.</p>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
