import React from 'react'

function Members() {
   {/* make an object of image and render it through map() fxn */} 
  const memeberpic = [
    {
      id: 1,
      image: 'm1.jpg',
      tittle: 'John kin'
    },
    {
      id: 2,
      image: 'm2.jpg',
      tittle: 'christopher'
    },
    {
      id: 1,
      image: 'm3.jpg',
      tittle: 'Maxtern Rock                                  '
    },
    {
      id: 1,
      image: 'm4.jpg',
      tittle: 'Valey roge'
    },
    {
      id: 1,
      image: 'm6.jpg',
      tittle: 'Sam Kelly'
    }

  ];
  return (
    <>
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              accusamus aspernatur hic laboriosam blanditiis atque error eius
              dolorem fuga harum?
            </p>
          </div>
          <div className="members_container">
            {memeberpic.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    </>
  )
}

export default Members
