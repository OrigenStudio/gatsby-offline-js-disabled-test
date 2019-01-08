import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Typography, Paper, Button } from '@material-ui/core'

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing.unit,
  },
})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Paper className={classes.paper}>
      <Typography variant="title">Hello, world!</Typography>
      <Button color="primary" variant="raised">
        Click me!
      </Button>
    </Paper>
  </Layout>
)

export default withStyles(styles)(IndexPage)
