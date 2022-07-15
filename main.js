function fetchData(){
    fetch("https://sfamisoftwares.com/api-js/signs.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            const html = data
                .map(sign => {
                    return `
                    <h1>${sign.name}</h1>
                    <img src=${sign.image}></img>
                    <p>${sign.description}</p>
                    `;
                })
                .join("");
            document.querySelector("#app").insertAdjacentHTML("afterend", html); 
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();