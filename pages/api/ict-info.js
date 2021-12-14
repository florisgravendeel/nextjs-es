export default function handler(req, res) {
  res.status(200).json(output)
}

const output = [
  {
    "id": 1,
    "title": "Backend",
    "body": "Backend ontwikkeling is gericht op de logica en functionaliteit van een website of softwareproduct. De technologie van de backend bestaat uit een combinatie van servers, applicaties en databases.",
    "day": "Vrijdag",
    "day_value": 5,
    "rating": 5,
    "guild_leader": "Jeroen Weber"
  },

  {
    "id": 2,
    "title": "Frontend",
    "body": "Frontend ontwikkeling verwijst naar de zichtbare elementen van een site of applicatie, oftewel de onderdelen waarmee je vanuit een browser kunt communiceren. Het front-end gedeelte, ook wel de gebruikerskant genoemd, wordt gebouwd met onder andere: HTML, CSS en JavaScript",
    "day": "Woensdag",
    "day_value": 3,
    "rating": 3,
    "guild_leader": "Jan van Rouwendal"

  },
  {
    "id": 3,
    "title": "Artificial Intelligence",
    "body": "AI, staat voor kunstmatige intelligentie. Kunstmatige intelligentie kan complexe problemen oplossen en een gehele applicatie compleet transformeren. Er zijn verschillende soorten AI, zo heb je: spraak- en gezichtsherkenning, zelfrijdende auto’s, drones en nog veel meer!",
    "day": "Dinsdag",
    "day_value": 2,
    "rating": 0,
    "guild_leader": "Martijn Bellaard"
  },
  {
    "id": 4,
    "title": "Business IT & Management",
    "body": "IT-beslissingen gaan niet alleen over technologie en kosten, maar ook over business en opbrengsten. Hoe breng je bedrijfsprocessen zeker in kaart? Als Business IT Manager heb je zowel een ondersteunende als coördinerende rol binnen bedrijven.",
    "day": "Dinsdag",
    "day_value": 2,
    "rating": 2,
    "guild_leader": "Gert van Hardeveld"
  },
  {
    "id": 5,
    "title": "Technical Informatica",
    "body": "Bij technische informatica staat de koppeling tussen hardware en software centraal. Denk daarbij aan industriële meetapparatuur, beveiligingscamera's, ziekenhuisapparatuur en consumentenelektronica.",
    "day": "Donderdag",
    "day_value": 4,
    "rating": 1,
    "guild_leader": "Loek Sangers"
  },
  {
    "id": 6,
    "title": "Cyber Security & Cloud",
    "body": "Wat is cybersecurity? Cybersecurity is het beschermen van computers, servers, mobiele apparaten, elektronische systemen, netwerken en gegevens tegen schadelijke aanvallen.",
    "day": "Maandag",
    "day_value": 1,
    "rating": 2,
    "guild_leader": "Martijn Bellaard"
  }
]