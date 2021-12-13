export default function handler(req, res) {
  res.status(200).json(output)
}

const output = [
  {
    "id": 1,
    "title": "Backend",
    "body": "Backend ontwikkeling is gericht op de logica en functionaliteit van een website of softwareproduct. De technologie van de backend bestaat uit een combinatie van servers, applicaties en databases.",
    "day": "Vrijdag",
    "rating": 5
  },

  {
    "id": 2,
    "title": "Frontend",
    "body": "Frontend ontwikkeling verwijst naar de zichtbare elementen van een site of applicatie, oftewel de onderdelen waarmee je vanuit een browser kunt communiceren. Het front-end gedeelte, ook wel de gebruikerskant genoemd, wordt gebouwd met onder andere: HTML, CSS en JavaScript",
    "day": "Woensdag",
    "rating": 3
  },
  {
    "id": 3,
    "title": "Artificial Intelligence",
    "body": "AI, staat voor kunstmatige intelligentie. Kunstmatige intelligentie kan complexe problemen oplossen en een gehele applicatie compleet transformeren. Er zijn verschillende soorten AI, zo heb je: spraak- en gezichtsherkenning, zelfrijdende auto’s, drones en nog veel meer!",
    "day": "Dinsdag",
    "rating": 0
  },
  {
    "id": 4,
    "title": "Business IT & Management",
    "body": "IT-beslissingen gaan niet alleen over technologie en kosten, maar ook over business en opbrengsten. Hoe breng je bedrijfsprocessen zeker in kaart? Als Business IT Manager heb je zowel een ondersteunende als coördinerende rol binnen bedrijven.",
    "day": "Dinsdag",
    "rating": 2
  },
  {
    "id": 5,
    "title": "Technical Informatica",
    "body": "Bij technische informatica staat de koppeling tussen hardware en software centraal. Denk daarbij aan industriële meetapparatuur, beveiligingscamera's, ziekenhuisapparatuur en consumentenelektronica.",
    "day": "Donderdag",
    "rating": 1
  },
  {
    "id": 6,
    "title": "Cyber Security & Cloud",
    "body": "Wat is cybersecurity? Cybersecurity is het beschermen van computers, servers, mobiele apparaten, elektronische systemen, netwerken en gegevens tegen schadelijke aanvallen.",
    "day": "Maandag",
    "rating": 2
  }
]