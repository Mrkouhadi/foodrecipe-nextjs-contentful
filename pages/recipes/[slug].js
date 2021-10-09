import {createClient} from 'contentful';
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Loading from '../../components/Loading'

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,  //spaceID
    accessToken:process.env.CONTENTFUL_ACCESS_KEY // access token
  })

  export const getStaticPaths = async()=>{
    const response = await client.getEntries({content_type:'recipesReactjs'})

    const paths = response.items.map(item =>{
      return{
        params:{slug: item.fields.slug}
      }
    })
    return{
      paths:paths,
      fallback:true, // return a fallback version
    }
  }

  export const getStaticProps = async(context)=>{ // fetch single item
    const response = await client.getEntries({
      content_type:'recipesReactjs',
      'fields.slug':context.params.slug   //limit what we can get back from contentful
    })

    if(!response.items.length){
      return{
        redirect:{
          destination:'/', // in case the slug title doesn't exist, i redirect the user to '/'
          permanant:false  // in case we create a new slug with the same title that we checked before, then give em wht they want
        }
      }
    }

    return{
      props:{myRecipe: response.items[0]},
      revalidate:1 , //1 means 1 second here started the "Incremental Static Regeneration"
    }
  }


export default function RecipeDetails({myRecipe}) {
  if(!myRecipe) return <Loading/>

  const {featuredImage, title, cookingTime, ingredients, method} = myRecipe.fields;

  return (
    <div>
      <div className="banner">
        <Image src={'https:' + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}

        />
        <h2>{title}</h2>
      </div>
        <div className="info">
            <p>Take about {cookingTime} minutes to prepare.</p>
            <h3>ingredients: </h3>
            {ingredients.map((ingre,i)=>{
              return <span key={i}>{ingre} </span>
            })}
        </div>

        <div className="method">
          <h3>Method: </h3>
          <div>{documentToReactComponents(method)}</div>
        </div>

            <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
          color:#553772;
        }
        .banner h2 {
          margin: 0;
          background: #c7417b;
          display: inline-block;
          padding: 20px 50px;
          position: relative;
          top: -88px;
          left:0px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          border-radius:0 10px 0 0 ;
          transition:all 200ms ease-in;
        }
        .banner h2:hover{
          background-color: #553772;
          color:#f9f9f9;
        }

        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}
