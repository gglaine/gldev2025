export const revealDirective = {
    mounted(el, binding) {
      const { delay = 0, fadeSpeed = 1000 } = binding.value || {};
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el.classList.add("reveal-active");
              }, delay);
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );
  
      observer.observe(el);
  
      // Add initial styles
      el.style.opacity = 0;
      el.style.transition = `opacity ${fadeSpeed}ms ease-out, transform ${fadeSpeed}ms ease-out`;
    },
  };