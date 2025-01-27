// Função para buscar as informações de um personagem de Rick and Morty
function getCharacterData() {
    const characterName = document.getElementById('character').value.trim();
  
    if (!characterName) {
      alert('Por favor, insira o nome do personagem.');
      return;
    }
  
    // URL da API Rick and Morty para buscar personagens
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const characterInfoDiv = document.getElementById('character-details');
  
        if (data.results && data.results.length > 0) {
          const characterData = data.results[0]; // Pega o primeiro personagem encontrado
  
          characterInfoDiv.innerHTML = `
            <h3>Informações do Personagem</h3>
            <p><strong>Nome:</strong> ${characterData.name}</p>
            <p><strong>Espécie:</strong> ${characterData.species}</p>
            <p><strong>Status:</strong> ${characterData.status}</p>
            <p><strong>Gênero:</strong> ${characterData.gender}</p>
            <p><strong>Origem:</strong> ${characterData.origin.name}</p>
            <p><strong>Localização Atual:</strong> ${characterData.location.name}</p>
            <img src="${characterData.image}" alt="Imagem do personagem" />
          `;
        } else {
          characterInfoDiv.innerHTML = '<p>Personagem não encontrado.</p>';
        }
      })
      .catch(error => {
        document.getElementById('character-details').innerHTML = `<p>Erro ao buscar informações do personagem: ${error.message}</p>`;
      });
  }
  
  // Função para buscar as informações de um país
  function getCountryData() {
    const country = document.getElementById('country').value.trim();
  
    if (!country) {
      alert('Por favor, insira o nome do país.');
      return;
    }
  
    const url = `https://restcountries.com/v3.1/name/${country}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const countryInfoDiv = document.getElementById('country-details');
        const countryData = data[0]; // A API retorna um array de países com nome similar
  
        if (countryData) {
          countryInfoDiv.innerHTML = `
            <h3>Informações do País</h3>
            <p><strong>Nome:</strong> ${countryData.name.common}</p>
            <p><strong>População:</strong> ${countryData.population}</p>
            <p><strong>Capital:</strong> ${countryData.capital ? countryData.capital[0] : 'Não disponível'}</p>
            <p><strong>Área:</strong> ${countryData.area} km²</p>
            <p><strong>Região:</strong> ${countryData.region}</p>
          `;
        } else {
          countryInfoDiv.innerHTML = '<p>País não encontrado.</p>';
        }
      })
      .catch(error => {
        document.getElementById('country-details').innerHTML = `<p>Erro ao buscar informações do país: ${error.message}</p>`;
      });
  }
  