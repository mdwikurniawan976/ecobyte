import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
/* eslint-disable */
import '../utility/bootstrap/js/bootstrap.bundle.min.js';
/* eslint-enable */
import Navbar from '../components/Navbar';
import { FoodData } from '../utility/FoodData';
import Footer from '../components/Footer';
import { Carousel, InputNumber } from 'antd';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const nav = useNavigate();

  const [multiplierIng, setMultiplierIng] = useState(1);

  const handleMultiplierChange = (value) => {
    setMultiplierIng(value);
  };



  useEffect(() => {
    try {
      const foundRecipe = FoodData.find(item => item.id === parseInt(id));
      setRecipe(foundRecipe);
      console.log(foundRecipe);

      


      console.log(recipe.image)
    } catch (e) {
      console.log(e)
    }

  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nav])

  return (
    <div>
      <Navbar display={'true'} />
      <div className="container mt-5 pt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a className='link-success cursor-pointer' onClick={() => nav('/')}>Home</a></li>
            <li className="breadcrumb-item" aria-current="page"><a className='link-success cursor-pointer' onClick={() => nav('/recipe')}>Recipe</a></li>
            <li className="breadcrumb-item active" aria-current="page">{recipe ? (recipe.name.length > 20 ? `${recipe.name.slice(0, 20)}...` : recipe.name) : ''}</li>
          </ol>
        </nav>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-6">
            <Carousel arrows autoplay style={{ height: '20rem' }}>
              {recipe && recipe.image && recipe.image.map((url, index) => (
                <div key={index}>
                  <img src={url} className="img-fluid"
                    alt="Recipe Image"
                    style={{ objectFit: 'cover', height: '20rem', width: '100%' }}  />
                </div>
              ))}

            </Carousel>

            {/* <Carousel arrows autoplay style={{ height: '20rem' }}>
              {recipe && recipe.images && recipe.images.map((url, index) => (
                <div key={index}>
                  <img src={`./images/recipe/friedRice1.jpg`} className="d-block w-100" alt={`Recipe Image ${index}`} />
                </div>
              ))}

              <img src="/images/recipe/friedRice1.jpg" className="d-block position-relative img-fluid" alt="..." style={{objectFit: 'cover', maxHeight: '10rem'}}/>
            </Carousel> */}

            {/* <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                
                
                {recipe && recipe.images && recipe.images.map((url, index) => (
                <div className='carousel-item' key={index}>
                  <img src={`${process.env.PUBLIC_URL}${img}`} className="d-block w-100" alt={`Recipe Image ${index}`} />
                </div>
              ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
          </div>
          <div className="col-sm-12 col-md-6 border px-3 py-2 rounded-4 shadow-sm bg-light-subtle">
            <div className="px-3">
              {recipe ? (
                <div>
                  <h1 className='fw-bold'>{recipe.name}</h1>
                  <h5 className='badge' style={{ backgroundColor: '#fcf2ec', color: '#feb791' }}>{recipe.kal ? recipe.kal : ''} Kcal</h5>
                  <p className='mt-3'>{recipe.description}</p>
                </div>
              ) : (
                <div className='placeholder-glow'>
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-8"></span>
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-8"></span>
                  <span className="placeholder col-6"></span>

                </div>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mt-3 mb-3">
            <div className="border rounded-4 py-3 px-5 shadow-sm bg-light-subtle">
              <h3 className='mb-2'>Ingredients</h3>
              <InputNumber
                className='mb-3'
                min={1}
                max={10}
                defaultValue={1}
                onChange={handleMultiplierChange}
              />

              <p className="d-inline ms-2">
                Servings
              </p>

              {recipe && recipe.ingredients?.map((ingredient, index) => (
                <p key={index}>
                  - {recipe.ingredientsValue?.[index] ? (recipe.ingredientsValue[index] * multiplierIng) : ''} {ingredient}
                  {recipe.kalVallue?.[index] ? (
                    <span className='badge' style={{ backgroundColor: '#fcf2ec', color: '#feb791' }}>
                      {recipe.kalVallue[index] * multiplierIng} kcal
                    </span>
                  ) : ''}
                </p>
              ))}


            </div>
          </div>
          <div className="col-sm-12 col-md-8 mt-3 mb-5">
            <div className="border rounded-4 py-3 px-5 shadow-sm bg-light-subtle" >
              <h3 className="mb-4">How To Cook</h3>

              {recipe ? (
                <div>
                  {recipe.htc?.map((step, index) => (
                    <p key={index}>- {step}</p>
                  ))}
                  <br />
                </div>
              ) : (
                <div className='placeholder-glow'>
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-8"></span>
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-8"></span>
                  <span className="placeholder col-6"></span>
                </div>
              )}


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipePage