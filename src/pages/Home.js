import React from 'react';

import { Link } from 'react-router-dom';

const Home=() => (

  <div className="home">
    <div className="banner">
      <div className="banner-text">
        <h1>Go zero stay fluffy</h1>
          <div className="banner-btn">
            <Link to="/contact">Go zero</Link>
          </div>
      </div>
    </div>
    <div className="container">
      <div className="tweets">
        <div className="tweet">
          <div className="tweet-text">
            <h2>Welcome,</h2>
              <br />
                <p>At the beginning of 2019, I made the decision to eat less
                  dairy products. And then I decided to try to avoid buying
                  things that come in plastic packaging. A few months later,
                  another decision followed: making my own deodorant... Now,
                  I'm curious to see where this journey will take me next!
                  So, it all started with one little decision that led to other,
                  bigger changes. And all the while I stayed fluffy - happy,
                  comfortable and cozy! In the hope of encouraging you to take a
                  step towards a cleaner future, I created this blog. Join me on
                  my journey and hopefully get inspired to start your own!
                </p>
          </div>
          <img src="https://res.cloudinary.com/daf8fgekl/image/upload/v1597929812/gozerostayfluffy_iac0jd.png" alt="fluffy" />
        </div>
        <div className="tweet">
          <img src="https://res.cloudinary.com/daf8fgekl/image/upload/v1598372771/almond-milk_g2jcxb.png" alt="almondmilk"/>
            <div className="tweet-text">
                <h2>Almond milk,</h2>
                  <br />
                    <p>
                      The beginning of my journey: less dairy - better skin
                      My first decision at the beginning of 2019 was to reduce
                      dairy products. Having come out the other end of the
                      puberty-tube around 10 years ago, I felt like I should have
                      clearer skin and not those light acne pimples on my face
                      that I first noticed a few years back...
                      So, I tried to find out what might help. I grazed the
                      internet and read various tips in different forums. For
                      example, I started drinking mint tea, which had little to
                      no effect. Further into my research, I read that there
                      could be a correlation between the amount of dairy intake
                      and acne due to iodine and/or hormones in the milk which
                      might exacerbate acne prone skin.
                      See for example:
                      <br/>
                      <br/>
                        <a href="https://www.jaad.org/article/S0190-9622(05)02097-9/pdf" target="_blank">
                          Jaad
                        </a>
                      <br />
                        <a href="https://jandonline.org/article/S0002-8223(09)01867-7/abstract" target="_blank">
                          Jandonline
                        </a>
                      <br />
                      <br />
                      After having tried clearing my skin by upping my mint tea
                      intake, I decided to drop my milk drinking habit at the
                      end of January 2019. Up to then I used to drink at least a
                      big glass of milk every day. So, this was a big decision
                      for me. No more milk - still the occasional cheese or milk
                      in lasagne but nor more porridge or muesli made with
                      ordinary milk - for a couple of months to see if there would
                      be any visible improvements. Eight months later I was still
                      following this dietary habit. And guess what!?! In my case,
                      renouncing regular milk intake really helped my skin looking
                      healthier. :D Of course, I had to find an alternative to
                      animal milk. Which is why I turned to plant-based milk. For
                      a while, I was content buying ready made almond or soy milk.
                      However, I didn’t like the waste that came with it. Which
                      is why I decided to make my own &nbsp;
                      <Link to="/recipies" className="almon-milk-link">
                        almond milk...
                      </Link>
                    </p>
              </div>
            </div>
        <div className="tweet">
            <div className="tweet-text">
              <h2>Deo,</h2>
                <br />
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet.
                  </p>
            </div>
          <img src="https://res.cloudinary.com/daf8fgekl/image/upload/v1598372912/selfmade-deo_xdhhop.png" alt="Deo"/>
        </div>
      </div>
    </div>
  </div>
);


export default Home;
