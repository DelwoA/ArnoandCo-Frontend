import { useState } from "react";
import ContentWrapper from "../ContentWrapper";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "Support tickets dropped by 40% after implementing the new help center and knowledge base.",
      author: "Operations Manager",
      company: "SaaS Company",
    },
    {
      quote:
        "Our conversion rate increased by 28% within the first month after the website redesign.",
      author: "Marketing Director",
      company: "E-commerce Store",
    },
    {
      quote:
        "The automated booking system saves us 15 hours every week on administrative tasks.",
      author: "Business Owner",
      company: "Service Provider",
    },
  ];

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };
  const prev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <ContentWrapper>
      <section className="bg-white rounded-3xl overflow-hidden mb-7 sm:mb-8 md:mb-9 lg:mb-10 shadow-sm">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What our clients say
            </h2>
          </div>
          <div className="relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#F9E356] text-[#F9E356]"
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-black">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[activeIndex].company}
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default TestimonialsCarousel;
