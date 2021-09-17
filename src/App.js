import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedFort, setFort] = useState("Popular");
  const forts = {
    Popular: [
      {
        img:
          "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Raigad1.jpg",
        fortName: "Raigad Fort",
        discription:
          "Perched in Sahyadri Mountains. Raigad fort was once the capital of the Maratha Empire, and where Chhatrapati Shivaji Maharaj was crowned its ruler. Some main attractions of Raigad Fort are the Hirakani Buruj, Maha Darwaja, the King’s Durbar, Takmak Tok, Jagdishwar Mandir etc. The fort has become a major tourist spot for its trekking opportunities where one needs to climb up to 1737 steps and enjoy a breath-taking view of the landscape.",
        rating: "5/5"
      },
      {
        img:
          "https://images.thrillophilia.com/image/upload/s--aKfoWrWT--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/149/310/original/1553508482_shutterstock_1180915588.jpg.jpg",
        fortName: "Sinhagad Fort",
        discription:
          "Sinhagad or Kondhana is a pride of the southwestern region of Pune. This fort was the one to support Maharashtra during the ancient battles. Sinhagad battle of 1671 is the significant one. Bhuleshwar range of the great Sahyadris is the home to this historical monument. The fortress has an elevation of around 1312 m above the sea level. Sinhagad has got its own breakneck slopes to protect it from all sides. ",
        rating: "4/5"
      },
      {
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Panhala_fort_darwaja.jpg/1280px-Panhala_fort_darwaja.jpg",
        fortName: "Panhala Fort",
        discription:
          "Located in the proximity of Kolhapur city the Panhala Fort is strategically built and is the largest Fort in the Deccan region. It connects Maharashtra to the Arabian Sea through Bijapur and those who love exploring history and geographies will get amazed by it. The Fort showcases variants of motifs, bastions, and various other relics of different dynasties and the Indo-Islamic architecture is an add on.",
        rating: "5/5"
      },
      {
        img:
          "https://upload.wikimedia.org/wikipedia/commons/c/ca/Pratapgad_The_Fort_of_Valour.jpg",
        fortName: "Pratapgad Fort",
        discription:
          "The Pratapgad Fort is an important fort built by Chhatrapati Shivaji Maharaj. The Pratapgad Fort is known for the battle which took place between Chhatrapati Shivaji Maharaj and Afzal Khan. The fort is divided into parts – the upper fort and the lower fort. The lower fort is largely occupied by Bhawani temple, whereas the upper fort includes several eye-catching structures.",
        rating: "4/5"
      },
      {
        img:
          "https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/vijaydurg-shutterstock.jpg",
        fortName: "Vijaydurg Fort",
        discription:
          "Lying about 140 km from Kolhapur, Vijaydurg is sprawled along the Arabian Sea. Vijaydurg is known for its secluded beaches, historical forts and pristine natural environs. Tourists can soak in the natural beauty of this idyllic retreat and visit golden beaches that are lined with tall palm trees. Vijaydurg is noted for its Alphonso mango plantations and the sweet smell of the fruit lingers almost everywhere. Quite popular among tourists is Vijaydurg Fort that was built over 300 years ago by Chhatrapati Shivaji Maharaj. Since it was surrounded by water on all sides, it was considered impregnable in its heyday. The structure of the fort has three layers of walls and a smattering of watchtowers that helped keep the enemy at bay.",
        rating: "4/5"
      }
    ],
    Mumbai: [
      {
        img:
          "https://www.mumbairesort.in/blog/wp-content/uploads/2020/06/bandra-fort.jpg",
        fortName: "Bandra Fort",
        discription:
          "Located within city limits, in the suburb of Bandra lies Castella de Aguada, an old fort that now partially lies in ruins. Also called the Bandra fort, it was built by the Portuguese in the year 1640 and served as their watch tower for many years. ",
        rating: "3/5"
      },
      {
        img:
          "https://static-blog.treebo.com/wp-content/uploads/2018/02/Karnala-Fort-.jpg",
        fortName: "Karnala Fort",
        discription:
          "The Karnala Fort was an important strategic point that overlooked the Bor Pass. At the base of the fort is a temple that was built in honour of Goddess Bhavani. After you have seen the fort, visit the Karnala Bird Sanctuary that is located close by. ",
        rating: "4/5"
      },
      {
        img:
          "https://static-blog.treebo.com/wp-content/uploads/2018/02/Worli-Fort.jpg",
        fortName: "Worli Fort",
        discription:
          "Built by the British, the Worli Fort is a lesser-known landmark in the city. Inside the fort, there is a small well and a temple. On the borders of the fort are large cannons made from rock that were once used as weapons to deter enemies entering the territory. ",
        rating: "3/5"
      },
      {
        img:
          "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1568540909%2Fxtdrgzqgmhh4wspmlcmd.jpg",
        fortName: "Mahuli Fort",
        discription:
          "The Mahuli Fort is located at the highest point in the Thane district. Once under the care of Shahaji Raje, the fort today lies in ruins. On the fort premises, there are many small caves and an open Shiva temple. To get to the fort from Mumbai, drive down the Mumbai-Nashik highway and then take a detour from Asangaon, drive for about five kilometres until you reach the Mahuli Village. From there, you need to climb up a slope to get to the fort. ",
        rating: "4/5"
      },
      {
        img:
          "https://static-blog.treebo.com/wp-content/uploads/2018/02/Murud-Janjira-Fort.jpg",
        fortName: "Murud-Janjira Fort",
        discription:
          "This Murud-Janjira Fort is situated on the island of Murud, on the way to Alibaug from Mumbai (by road). It is one of the only forts in the region to be constructed in the centre of the sea. The only way to get to the fort is to hire a boat from the dock nearby. Inside the fort are beautiful carvings on the walls, docked cannons, and lovely citadels.",
        rating: "4/5"
      },
      {
        img: "https://live.staticflickr.com/3173/3029826392_d17cbf21e0_b.jpg",
        fortName: "Kolaba Fort",
        discription:
          "Locals refer to this fort as the Alibag Fort. Situated a little away from Mumbai, the fort has often been a stopover for people heading to the Alibag beach. The way to the fort is via the sea, you can either choose to rent a horse carriage or choose to wade through waist-high water. In the fort, you’ll find a few freshwater wells, some glorious ruins, and a few canon guys guns that lie vacant. Near the walls of the fort, there is a small room that was once considered to be a spy room.",
        rating: "3/5"
      }
    ],
    Pune: [
      {
        img:
          "https://imgmedia.lbb.in/media/2018/11/5bf6388ff329aa4cd2623057_1542862991571.jpg",
        fortName: "Shivneri Fort",
        discription:
          "One of the most popular trekking destinations near Pune, this fort is also rich with historical significance. This military fortification, built in the 17th century, is the birthplace of the founder of the Maratha Empire, Chhatrapati Shivaji Maharaj. The triangular shaped fort has a pond in the center of its complex called ‘Badami Talav’, as well as two water springs called Ganges and Yamuna which have water flow throughout the year. The nearby attractions from the Shivneri Fort include the Lenyadri Caves.",
        rating: "5/5"
      },
      {
        img:
          "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Tikona.jpg",
        fortName: "Tikona Fort",
        discription:
          "Tikona Fort, meaning triangular fort, derives its name from its pyramidal shape. It is a major hill fort in the Maval region near Lonavala, built during the Silhara dynasty’s rule. Nestled in the lap of the Sahyadri Ranges, this 3500-feet high (altitude) hill fort has its colossal entrance as its major highlight. Besides this, it is also popular for its Trimbakeshwar Mahadev temple, seven water tanks, Satavahana-era caves, and a breathtaking view of Pawna Dam.",
        rating: "4/5"
      },
      {
        img:
          "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Tung-fort-1.jpg",
        fortName: "Tung Fort",
        discription:
          "Enclosed in vast tropics and found at an astounding height of 1075m from sea leave, Tung fort is a mesmerizing destination in Maharashtra, India. The fort is specifically admired for its breathtaking views and spectacular treks. The literal translation of the word “Tung” is “difficult” and hiking to this momentous fort is surely a task. Apart from this, the place is also excellent for a family picnic and camping. ",
        rating: "4/5"
      },
      {
        img:
          "http://1.bp.blogspot.com/-SrKrZ53nvmE/UfajOxOn4WI/AAAAAAAAFCo/tpvj5V0-toI/s1600/Purandar+fort+2013+021.jpg",
        fortName: "Purandar Fort",
        discription:
          "Situated deep within the beautiful Sahyadris of the Western Ghats, rising at an elevation of 1,387 meters above sea level, Purandar Fort is an impressive fort, known to be the birthplace of Chhatrapati Sambhaji Maharaj, the son of Chhatrapati Shivaji Maharaj. Purandar Fort also has a smaller, twin fort named Vajragad or Rudramal, which is located towards the east of the main fort. A popular hub amongst paragliders and trekkers, Purandar Fort is also often used by the National Defense Academy for training purposes. ",
        rating: "5/5"
      },
      {
        img:
          "https://images.thrillophilia.com/image/upload/s--3LUcXh_s--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/149/300/original/1553507239_shutterstock_707946589.jpg.jpg",
        fortName: "Lohgad Fort",
        discription:
          "Built in the 16th century, the Lohagarh Fort is a military marvel that remained with the Marathas for the majority of time, except for the short 5 years when the Mughals captured it. Rising at an elevation of 1,033 meters above sea level, this fort is connected to the nearby Visapur Fort by a small range. Overlooking the Parvana Reservoir, the four gates of the fort are still standing upright and are in good shape and it is one of the popular forts in Maharashtra.",
        rating: "5/5"
      },
      {
        img: "https://logout.world/media/event/323/IMG_9151.jpg",
        fortName: "Rajgad Fort",
        discription:
          "Formerly known as Murudev, this hill fort is located in Pune District, and used to be the capital of the Maratha Empire for about 26 years under the reign of Chhatrapati Shivaji Maharaj. This fort was built using the treasures discovered from the nearby Torna Fort, and boasts to have hosted Shivaji Maharaj for the highest number of days. ",
        rating: "5/5"
      },
      {
        img:
          "https://avatars.mds.yandex.net/get-zen_doc/229502/pub_5b0ee50b799d9d9bb09c9496_5b0ee5d5c71a92ba5f3d54d2/scale_1200",
        fortName: "Korigad Fort",
        discription:
          "Korigad Fort, which is around 3028 feet above sea level, is one of the highest forts in India, making it a popular trekking destination among youngsters. The fort was unknown for long until Shivaji Maharaj incorporated it into his kingdom in 1657. There is a temple dedicated to a local deity, Korai Devi, and many other small temples dedicated to Lord Vishnu and Lord Shiva inside the fort. ",
        rating: "4/5"
      }
    ]
  };

  const fortList = Object.keys(forts);

  const setSelectedFort = (fortSelected) => {
    setFort(fortSelected);
  };

  return (
    <div>
      <div className="header">
        <h1>Love Travelling?</h1>
      </div>
      <div className="intro">
        <div className="slider">
          <div className="slide" id="slide-1">
            <img
              className="img_fort"
              src="https://images.thrillophilia.com/image/upload/s--yMxOb-gy--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/149/318/original/1553509646_Tung_Fort.png.jpg"
              alt="fort1"
            />
          </div>
          <div className="slide" id="slide-2">
            <img
              className="img_fort"
              src="https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Tikona.jpg"
              alt="fort1"
            />
          </div>
          <div className="slide" id="slide-3">
            <img
              className="img_fort"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Pratapgad_The_Fort_of_Valour.jpg"
              alt="fort1"
            />
          </div>
        </div>

        <div className="content">
          <p>
            Maharashtra is a state with a rich history. There are more than 300
            forts in Maharashtra, towering structures built on hills, mountains,
            and by the sea, centuries and centuries ago. These strongholds, most
            of them associated with the Marathas, are an important part of
            Indian history, a reminder of the powerful kingdoms that once ruled
            our lands. Most of the forts in Maharashtra were built by
            Chhatrapati Shivaji Maharaj and his Maratha Empire. They include
            some stunning forts that stand proudly in Maharashtra.
          </p>
          <h2>Let's start our journey!</h2>
        </div>
      </div>
      <div className="maincontent">
        <div className="fortList">
          {fortList.map((fort) => (
            <button
              className="fortNames"
              key={fort}
              onClick={() => {
                setSelectedFort(fort);
              }}
            >
              {fort}
            </button>
          ))}
        </div>

        <center>
          <span style={{ fontSize: "0.75rem", color: "white" }}>
            <strong>(Click on these buttons to see relevent content)</strong>
          </span>
        </center>
      </div>
      <div
        className="maincontent"
        style={{ backgroundColor: "var(--secondaryColor)" }}
      >
        <div className="fortsView">
          {forts[selectedFort].map((fort) => (
            <div className="fortCard">
              <img className="fortImage" src={fort.img} alt="fortImg" />
              <h2>
                <u>{fort.fortName}</u>
              </h2>
              <p style={{ textAlign: "justify" }}> {fort.discription} </p>
              <p style={{ textAlign: "start" }}>rating: {fort.rating}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3
          style={{
            fontFamily: "cursive",
            textAlign: "center",
            backgroundColor: "var(--primaryColor)",
            color: "white",
            padding: "2rem",
            margin: "0"
          }}
        >
          {" "}
          Made with{" "}
          <span role="img" aria-label="">
            ❤️
          </span>{" "}
          by Suchita Ghadge
        </h3>
      </div>
    </div>
  );
}
