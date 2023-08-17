import React from 'react';
import profileImg from '../../assets/Profile/Thien.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="profileImg">
        <div className="profile-img">
        <img className="profileImg" src={profileImg} alt="Profile Picture"></img>
        </div>
        </div>
        <p>
        Hey there! I'm a recent graduate in React development, and I've got a strong foundation in web development from my studies. I'm really good at making cool dynamic user interfaces using React.js. I also know how to make things work super smoothly and look great on all sorts of web browsers. I've teamed up on projects where we made sure the code was neat and the designs were all about what users need. I'm super excited to bring my skills and excitement to a team that's all about growing. Let's connect and make some awesome web experiences together!
        </p>
        <p>
        One thing that really stands out for me is how I led a team in creating a responsive application platform using React – it's a big achievement for me. This whole experience boosted my skills in solving tricky problems and showed me how important it is to work together smoothly. As I keep moving forward, I'm all pumped up to take on fresh challenges and add my bit to creative solutions in the web development realm. I'm all about working together and bringing even more success to the team!
        </p>
    </section>
  );
}

export default About;
