import {createClient} from 'contentful';

import RecipeCard from '../components/RecipeCard';

export const getStaticProps = async() => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,  //spaceID
    accessToken:process.env.CONTENTFUL_ACCESS_KEY // access token
  });

  const response = await client.getEntries({content_type:'recipesReactjs'}); // content_type from our account in contentful

  return {
    props:{ recipesArr: response.items},
    revalidate:1 , //1 means 1 second. here started the "Incremental Static Regeneration"
  }
}

export default function Recipes({recipesArr}) {

  return (
    <div className="recipe-list">
      {recipesArr && recipesArr.map(recipe =>{
        return <RecipeCard key={recipe.sys.id} recipe={recipe}/>
      })}
      <style jsx>
        {`
        .recipe-list{
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:20px 60px;
        }
        @media (max-width:768px){
          .recipe-list{
           grid-template-columns:1fr;
            grid-gap:0:
        }
        }
        `}
      </style>
    </div>
  )
}
