import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Java Programming",
      rating: 5,
      text: "CSG Computer Education transformed my career. The Java course was comprehensive and the instructors were incredibly supportive. I landed a software developer job within 2 months of completion.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rahul Patel",
      course: "Tally Accounting",
      rating: 5,
      text: "The Tally course at CSG was exactly what I needed. The practical approach and real-world examples helped me understand accounting software thoroughly. Now I work as an accounts executive.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sneha Gupta",
      course: "Adobe Photoshop",
      rating: 5,
      text: "Amazing experience learning Photoshop at CSG. The hands-on projects and personalized attention from instructors made all the difference. I now run my own graphic design business.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Amit Kumar",
      course: "Web Development",
      rating: 5,
      text: "The web development course covered everything from HTML to advanced frameworks. The practical assignments and industry insights prepared me well for my current role as a web developer.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

<<<<<<< HEAD
  // Move to next testimonial, wraps around
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Move to previous testimonial, wraps around
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, course, rating, text, image } = testimonials[currentIndex];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5">
=======
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
<<<<<<< HEAD
    const interval = setInterval(nextTestimonial, 2000);
=======
    const interval = setInterval(nextTestimonial, 5000);
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
<<<<<<< HEAD
        <div className="text-center mb-5" data-aos="fade-up">
=======
        {/* Heading */}
        <div className="text-center mb-5">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
          <h2 className="fw-bold fs-2 mb-3 text-dark">What Our Students Say</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Hear from our successful graduates who have transformed their careers with CSG Computer Education
          </p>
        </div>

<<<<<<< HEAD
        {/* Testimonial Card */}
        <div className="position-relative mx-auto" style={{ maxWidth: "850px" }}>
          <div className="bg-white shadow-lg rounded-4 p-4">
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-auto text-center">
                <img
                  src={image}
                  alt={name}
=======
<<<<<<< HEAD
        <div
          className="position-relative mx-auto testimonial-card"
          style={{ maxWidth: "850px" }}
          data-aos="fade-up"
        >
          <div className="bg-white shadow-lg rounded-4 p-4 transition testimonial-inner">
=======
        {/* Testimonial Card */}
        <div className="position-relative mx-auto" style={{ maxWidth: "850px" }}>
          <div className="bg-white shadow-lg rounded-4 p-4">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-auto text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
                  className="rounded-circle"
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="col text-center text-md-start">
                <div className="d-flex justify-content-center justify-content-md-start mb-2">
<<<<<<< HEAD
                  {[...Array(rating)].map((_, i) => (
=======
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
                    <Star key={i} size={18} className="text-warning me-1" fill="currentColor" />
                  ))}
                </div>

<<<<<<< HEAD
                <p className="fst-italic text-muted mb-3">“{text}”</p>
                <h5 className="fw-semibold text-dark mb-0">{name}</h5>
                <p className="text-primary small">{course} Graduate</p>
=======
                <p className="fst-italic text-muted mb-3">
                  “{testimonials[currentIndex].text}”
                </p>
                <h5 className="fw-semibold text-dark mb-0">
                  {testimonials[currentIndex].name}
                </h5>
                <p className="text-primary small">
                  {testimonials[currentIndex].course} Graduate
                </p>
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
<<<<<<< HEAD
            className="btn btn-light border position-absolute top-50 start-0 translate-middle-y"
            style={{ transform: "translate(-50%, -50%)" }}
            aria-label="Previous testimonial"
=======
<<<<<<< HEAD
            className="btn btn-light border position-absolute top-50 start-0"
=======
            className="btn btn-light border position-absolute top-50 start-0 translate-middle-y"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
            style={{ transform: "translate(-50%, -50%)" }}
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={nextTestimonial}
<<<<<<< HEAD
            className="btn btn-light border position-absolute top-50 end-0 translate-middle-y"
            style={{ transform: "translate(50%, -50%)" }}
            aria-label="Next testimonial"
=======
<<<<<<< HEAD
            className="btn btn-light border position-absolute top-50 end-0"
=======
            className="btn btn-light border position-absolute top-50 end-0 translate-middle-y"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
            style={{ transform: "translate(50%, -50%)" }}
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
          >
            <ChevronRight size={16} />
          </button>

<<<<<<< HEAD
          {/* Navigation Dots */}
=======
          {/* Dots */}
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
          <div className="d-flex justify-content-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-circle p-1 border-0 ${
                  index === currentIndex ? "bg-primary" : "bg-secondary"
                }`}
<<<<<<< HEAD
                style={{ width: "10px", height: "10px", cursor: "pointer" }}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex}
=======
<<<<<<< HEAD
                style={{ width: "10px", height: "10px", cursor: "pointer" }}
=======
                style={{ width: "10px", height: "10px" }}
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
