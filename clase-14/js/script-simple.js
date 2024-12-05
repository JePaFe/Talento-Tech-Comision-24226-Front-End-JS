fetch("./posts.json")
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  })
  .then((posts) => {
    const section = document.querySelector("section");

    section.innerHTML = "";

    posts.forEach((post) => {
      const html = `
            <article>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <img src="${post.image}" alt="${post.title}">
            </article>
        `;

      section.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log(error);
  });

// fetch("./nav.text")
//   .then((res) => res.text())
//   .then((txt) => {
//     document.write(txt);
//   });
