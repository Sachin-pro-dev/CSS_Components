const cursor = document.querySelector(".cursor");
      const animateCursor = (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      };
      window.addEventListener("mousemove", animateCursor);