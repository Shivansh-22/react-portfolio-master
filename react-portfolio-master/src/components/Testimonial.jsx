import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Shivansh"}
          feedback={"Your Teaching skills are so good."}
        />

        <TestimonialCard
          name={"Ramzi"}
          feedback={
            "Seems like any business man from dubai"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should be the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
