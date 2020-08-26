import React from 'react';

const Recipies=() => (

  <div className="container">
    <div className="recipies">
      <div className="recipie">
          <div className="recipie-info">
            <h3>Fast and simple almond milk,</h3>
              <img src="https://res.cloudinary.com/daf8fgekl/image/upload/v1598372771/almond-milk_g2jcxb.png" alt="almondmilk"/>
                <h4>Tool's you need</h4>
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
          </div>
      </div>
    </div>
  </div>
);

export default Recipies;
