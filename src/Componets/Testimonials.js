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
          <h2 className="fw-bold fs-2 mb-3 text-dark">What Our Students Say</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Hear from our successful graduates who have transformed their careers with CSG Computer Education
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="position-relative mx-auto" style={{ maxWidth: "850px" }}>
          <div className="bg-white shadow-lg rounded-4 p-4">
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-auto text-center">
                <img
                  src={image}
                  alt={name}
                  className="rounded-circle"
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="col text-center text-md-start">
                <div className="d-flex justify-content-center justify-content-md-start mb-2">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-warning me-1" fill="currentColor" />
                  ))}
                </div>

                <p className="fst-italic text-muted mb-3">“{text}”</p>
                <h5 className="fw-semibold text-dark mb-0">{name}</h5>
                <p className="text-primary small">{course} Graduate</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="btn btn-light border position-absolute top-50 start-0 translate-middle-y"
            style={{ transform: "translate(-50%, -50%)" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={nextTestimonial}
            className="btn btn-light border position-absolute top-50 end-0 translate-middle-y"
            style={{ transform: "translate(50%, -50%)" }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>

          {/* Navigation Dots */}
          <div className="d-flex justify-content-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-circle p-1 border-0 ${
                  index === currentIndex ? "bg-primary" : "bg-secondary"
                }`}
                style={{ width: "10px", height: "10px", cursor: "pointer" }}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
