import React from 'react'
import { Header } from '../../components/Header/Header'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

export function Home() {
  return (
    <div>
      <Header/>
      <ExploreMenu />
      <FoodDisplay />
    </div>
  )
}
