import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, Rate, Badge, Button } from 'antd'; 
import { FoodData } from '../utility/FoodData';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const MenuPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setData(FoodData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <Navbar display={'true'} />

      <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
        <p className="text-success text-center mb-0">EcoByte's Recipe's </p>
        <h2 className="text-center mb-4">Waste-Free Meals with Calorie Breakdown</h2>

        <div className="row d-flex justify-content-center mb-5">
          <Button className="col-1 mx-1" style={{ backgroundColor: '#fa8c16', borderColor: '#fa8c16', color: '#fff' }}>
            All
          </Button>
          <Button className="col-1 mx-1 grey-button" type="default">Vegetarian</Button>
          <Button className="col-1 mx-1 grey-button" type="default">Vegan</Button>
          <Button className="col-1 mx-1 grey-button" type="default">Gluten-Free</Button>
          <Button className="col-1 mx-1 grey-button" type="default">Desserts</Button>
        </div>

        <div className="row mt-4 d-flex justify-content-center">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-4" key={index}>
                <Card
                  loading={true}
                  style={{ width: 300, marginBottom: '2rem' }}
                />
              </div>
            ))
          ) : (
            data &&
            data.map((item, index) => {
              const fixedRating = [4.5, 2.5, 3, 4, 3.5, 5][Math.floor(Math.random() * 6)];
              return (
                <div
                  className="col-md-4"
                  key={index}
                  onClick={() => nav(`/recipe/${item.id}`)}
                >
                  <Badge
                    count={`${item.kal} kcal`} 
                    style={{ backgroundColor: '#fa8c16' }} 
                    offset={[0, 0]}
                  >
                    <Card
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={item.image[0]}
                          style={{ maxHeight: '25vh', objectFit: 'cover' }}
                        />
                      }
                      style={{ width: 300, marginBottom: '2rem' }}
                    >
                      <Meta title={item.name} description={item.description} />
                      <Rate
                        allowHalf
                        value={fixedRating}
                        disabled
                        style={{ marginTop: '10px' }}
                      />
                    </Card>
                  </Badge>
                </div>
              );
            })
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
