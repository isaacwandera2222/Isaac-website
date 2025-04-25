window.onload = () => {
    const text = "I'm Isaac Wandera, currently studying Diploma in Computer Programming.";
    const container = document.getElementById("autoText");
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        container.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    typeWriter();
  };
  