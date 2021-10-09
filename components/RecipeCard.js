import Link from 'next/link'
import Image from 'next/image';

const RecipeCard = ({recipe}) => {

    const {title, slug, cookingTime, thumbnail} = recipe.fields;
    return (
        <div className="card">
            <div className="featured">
                <Image src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={ thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Takes approximitly {cookingTime} minutes to prepare</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}>
                        <a>pick up this recipe</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
        .card{
          border-radius:10px;
          overflow:hidden;
        }
        .content {
          background: #8f3b76;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: 0px;
          color:#f9f9f9;

        }

        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color:#553772;

        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          overflow:hidden;
          padding-top:10px;
        }
        .actions a {
          color: #f9f9f9;
          background-color: #c7417b;
          padding: 16px 24px;
          text-decoration: none;
          border-radius:10px 10px 0  0;
          transition:all 200ms ease-in;
        }
        .actions a:hover{
          transform:scale(1.2);
        }
      `}</style>
        </div>
    )
}

export default RecipeCard
