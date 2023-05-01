import { NavInterface, Sponsors, CategoryCard } from '@/components'
import CategoriesWrapper from './style'
import categoriesData from './data'

export default function CategoriesPage() {
  
  return (
    <>
      <NavInterface />
      <CategoriesWrapper>
        {categoriesData.map((category, index) => (
          <CategoryCard 
          key={index}
          title={category.title}
          competition={category.competition}
          description={category.description}
          image={category.image}
          />
        ))}
      </CategoriesWrapper>
      <Sponsors />
    </>
  )
}
