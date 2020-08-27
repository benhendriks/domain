import React from 'react';

const Recipies=() => (

  <div className="container">
    <div className="recipies">
      <div className="recipie">
        <div className="recipie-info">
          <h3>Fast and simple almond milk,</h3>
            <img src="https://res.cloudinary.com/daf8fgekl/image/upload/v1598516692/ingredients_almond-milk_x9f0bq.png" alt="fluffy-almond-milk"/>
        </div>
          <div className="recipie-details">
            <h4>Tool's you need:</h4>
              <ul className="tools">
                <li>measuring cup</li>
                  <li>1 blender</li>
                    <li>1 big jug (volume 1 litre)</li>
                  <li>1 cheese cloth</li>
                <li>1 glass bottle</li>
              </ul>
            <h4>The ingredients (for about 1 litre):</h4>
              <ul className="ingredients">
                <li>200 g almonds</li>
                  <li>1 litre of water</li>
                  <li>a pinch of salt</li>
                <li>a little honey (according to taste)</li>
              </ul>
            <h4>You need to…:</h4>
              <ul className="preparation">
                <li>
                  wash, cover with water and soak over night
                  rinse again
                </li>
                <li>
                  put the almonds into the blender, cover with some of the water,
                  blend it
                </li>
                <li>
                  add a pinch of salt, some honey (or spices if you like),
                  the rest of the water and blend
                </li>
              </ul>
            </div>
      </div>
    </div>
  </div>
);

export default Recipies;
