import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import styles from './navigation.module.css'


export default () => {

              const data = useStaticQuery(
                graphql`
                  query {
                    allContentfulDemoNavigation(filter: {id: {eq: "18f03f94-5e6a-56fb-b086-da64ae76f761"}}) {
                      edges {
                        node {
                          navItems {
                            name
                            slug
                          }
                        }
                      }
                    }
                  }
                `
              )
              
              
              // for (const property in MyNavItems) {
              //   navLinks += '<a href="${MyNavItems[property].slug}">${MyNavItems[property].name}</a></li>'
              // }
              return (
              <nav role="navigation">
                {data.allContentfulDemoNavigation.edges.map(({ node }) => (
                  <ul className={styles.navigation}>
                    {console.log(node)}
                    {node.navItems.map(({ name, slug }, i) => (
                      <li key={i} className={styles.navigationItem}>
                        {console.log(name,slug,i)}
                        <Link to={slug}>{name}</Link>
                      </li>
                    ))} 
                  </ul>
                 ))} 
              </nav>
            )
        }
