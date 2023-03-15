const stations = {
  victoria: [
    "Brixton Underground Station",
    "Stockwell Underground Station",
    "Vauxhall Underground Station",
    "Pimlico Underground Station",
    "Victoria Underground Station",
    "Green Park Underground Station",
    "Oxford Circus Underground Station",
    "Warren Street Underground Station",
    "Euston Underground Station",
    "King's Cross Underground Station",
    "Highbury Underground Station",
    "Finsbury Park Underground Station",
    "Seven Sisters Underground Station",
    "Tottenham Hale Underground Station",
    "Blackhorse Road Underground Station",
    "Walthamstow Central Underground Station",
  ],
  jubilee: [
    "Stanmore Underground Station",
    "Canons Park Underground Station",
    "Queensbury Underground Station Underground Station",
    "Kingsbury Underground Station Underground Station",
    "Wembley Park Underground Station",
    "Neasden Underground Station",
    "Dollis Hill Underground Station",
    "Willesden Green Underground Station",
    "Kilburn Underground Station",
    "West Hampstead Underground Station",
    "Finchley Road Underground Station",
    "Swiss Cottage Underground Station",
    "St. Johns Wood Underground Station",
    "Baker Street Underground Station",
    "Bond Street Underground Station",
    "Green Park Underground Station",
    "Westminster Underground Station",
    "Waterloo Underground Station",
    "Southwark Underground Station",
    "London Bridge Underground Station",
    "Bermondsey Underground Station",
    "Canada Water Underground Station",
    "Canary Wharf Underground Station",
    "North Greenwich Underground Station",
    "Canning Town Underground Station",
    "West Ham Underground Station",
    "Stratford Underground Station",
  ],
  central: [
    "Ealing Underground Station",
    "West Acton Underground Station",
    "North Acton Underground Station",
    "East Acton Underground Station",
    "White City Underground Station",
    "Shepherd's Bush Underground Station",
    "Holland Park Underground Station",
    "Notting Hill Underground Station",
    "Queensway Underground Station",
    "Lancaster Gate Underground Station",
    "Marble Arch Underground Station",
    "Bond Street Underground Station",
    "Oxford Circus Underground Station",
    "Tottenham Court Underground Station",
    "Holborn Underground Station",
    "Chancery Underground Station",
    "St. Paul's Underground Station",
    "Bank Underground Station",
    "Liverpool Street Underground Station",
    "Bethnal Green Underground Station",
    "Mile End Underground Station",
    "Stratford Underground Station",
    "Leyton Underground Station",
    "LeytonStone Underground Station",
    "Snaresbrook Underground Station",
    "South Woodford Underground Station",
    "Woodford Underground Station",
    "Buckhurst Hill Underground Station",
    "Loughton Underground Station",
    "Debden Underground Station",
    "Theydon Underground Station",
    "Epping Underground Station",
  ],
  metropolitan: [
    "Amersham Underground Station",
    "Chalfont Underground Station",
    "Chorleywood Underground Station",
    "Rickmansworth Underground Station",
    "Moor Park Underground Station",
    "Northwood Underground Station",
    "Northwood Hills Underground Station",
    "Pinner Underground Station",
    "North Harrow Underground Station",
    "Harrow-on-the-Hill Underground Station",
    "Northwick Park Underground Station",
    "Preston Road Underground Station",
    "Wembley Park Underground Station",
    "Willesden Green Underground Station",
    "Finchley Road Underground Station",
    "Baker Street Underground Station",
    "Great Portland Street Underground Station",
    "Euston Square Underground Station",
    "King's Cross Underground Station",
    "Farringdon Underground Station",
    "Barbican Underground Station",
    "Moorgate Underground Station",
    "Liverpool Street Underground Station",
    "Aldgate Underground Station",
  ],
  northern: [
    "High Barnet Underground Station",
    "Totteridge & Whetstone Underground Station",
    "Woodside Park Underground Station",
    "West Finchley Underground Station",
    "Finchley Central Underground Station",
    "East Finchley Underground Station",
    "Highgate Underground Station",
    "Archway Underground Station",
    "Tufnell Park Underground Station",
    "Kentish Town Underground Station",
    "Camden Town Underground Station",
    "Mornington Crescent Underground Station",
    "Euston Underground Station",
    "King's Cross St Pancras Underground Station",
    "Angel Underground Station",
    "Old Street Underground Station",
    "Moorgate Underground Station",
    "Bank Underground Station",
    "London Bridge Underground Station",
    "Borough Underground Station",
    "Elephant & Castle Underground Station",
    "Kennington Underground Station",
    "Oval Underground Station",
    "Stockwell Underground Station",
    "Clapham North Underground Station",
    "Clapham Common Underground Station",
    "Clapham South Underground Station",
    "Balham Underground Station",
    "Tooting Bec Underground Station",
    "Tooting Broadway Underground Station",
    "Colliers Wood Underground Station",
    "South Wimbledon Underground Station",
    "Morden Underground Station",
    "Mill Hill East Underground Station",
    "Edgeware Underground Station",
    "Burnt Oak Underground Station",
    "Colindale Underground Station",
    "Hendon Central Underground Station",
    "Brent Cross Underground Station",
    "Golders Green Underground Station",
    "Hampstead Underground Station",
    "Belsize Park Underground Station",
    "Chalk Farm Underground Station",
    "Warren Street Underground Station",
    "Goodge Street Underground Station",
    "Tottenham Court Road Underground Station",
    "Leicester Square Underground Station",
    "Charing Cross Underground Station",
    "Embankment Underground Station",
    "Waterloo Underground Station",
  ],
  bakerloo: [
    "Harrow & Wealdstone Underground Station",
    "Kenton Underground Station",
    "South Kenton Underground Station",
    "North Wembley Underground Station",
    "Wembley Central Underground Station",
    "Stonebridge Park Underground Station",
    "Harlesden Underground Station",
    "Willesden Junction Underground Station",
    "Kensal Green Underground Station",
    "Queen's Park Underground Station",
    "Kilburn Park Underground Station",
    "Warwick Avenue Underground Station",
    "Paddington Underground Station",
    "Edgware Road Underground Station",
    "Marylebone Underground Station",
    "Baker Street Underground Station",
    "Regent's Park Underground Station",
    "Oxford Circus Underground Station",
    "Piccadilly Circus Underground Station",
    "Charing Cross Underground Station",
    "Embankment Underground Station",
    "Waterloo Underground Station",
    "Lambeth North Underground Station",
    "Elephant & Castle Underground Station",
  ],
  piccadilly: [
    "Uxbridge Underground Station",
    "Hillingdon Underground Station",
    "Ickenham Underground Station",
    "Ruislip Underground Station",
    "Ruislip Manor Underground Station",
    "Eastcote Underground Station",
    "Rayners Lane Underground Station",
    "South Harrow Underground Station",
    "Sudbury Hill Underground Station",
    "Sudbury Town Underground Station",
    "Alperton Underground Station",
    "Park Royal Underground Station",
    "North Ealing Underground Station",
    "Ealing Common Underground Station",
    "Heathrow Underground Station",
    "Hatton Cross Underground Station",
    "Hounslow West Underground Station",
    "Hounslow Central Underground Station",
    "Hounslow East Underground Station",
    "Osterley Underground Station",
    "Boston Manor Underground Station",
    "Southfields Underground Station",
    "South Ealing Underground Station",
    "Acton Town Underground Station",
    "Turnham Green Underground Station",
    "Hammersmith Underground Station",
    "Barons Court Underground Station",
    "Earl's Court Underground Station",
    "Gloucester Road Underground Station",
    "South Kensington Underground Station",
    "Knightsbridge Underground Station",
    "Hyde Park Corner Underground Station",
    "Green Park Underground Station",
    "Piccadilly Circus Underground Station",
    "Leicester Square Underground Station",
    "Covent Garden Underground Station",
    "Holborn Underground Station",
    "Russell Square Underground Station",
    "King's Cross St Pancras Underground Station",
    "Caledonian Road Underground Station",
    "Holloway Road Underground Station",
    "Arsenal Underground Station",
    "Finsbury Park Underground Station",
    "Manor House Underground Station",
    "Turnpike Lane Underground Station",
    "Wood Green Underground Station",
    "Bounds Green Underground Station",
    "Arnos Grove Underground Station",
    "Southgate Underground Station",
    "Oakwood Underground Station",
    "Cockfosters Underground Station",
  ],
  district: [
    "Ealing Broadway Underground Station",
    "Ealing Common Underground Station",
    "Acton Town Underground Station",
    "Chiswick Park Underground Station",
    "Turnham Green Underground Station",
    "Stamford Brook Underground Station",
    "Ravenscourt Park Underground Station",
    "Hammersmith Underground Station",
    "Barons Court Underground Station",
    "West Kensington Underground Station",
    "Earl's Court Underground Station",
    "Gloucester Road Underground Station",
    "South Kensington Underground Station",
    "Sloane Square Underground Station",
    "Victora Underground Station",
    "St James's Park Underground Station",
    "Westminster Underground Station",
    "Embankment Underground Station",
    "Temple Underground Station",
    "Blackfriars Underground Station",
    "Mansion House Underground Station",
    "Cannon Street Underground Station",
    "Monument Underground Station",
    "Tower Hill Underground Station",
    "Aldgate East Underground Station",
    "Whitechapel Underground Station",
    "Stepney Green Underground Station",
    "Mile End Underground Station",
    "Bow Road Underground Station",
    "Bromley-by-Bow Underground Station",
    "West Ham Underground Station",
    "Plaistow Underground Station",
    "Upton Park Underground Station",
    "East Ham Underground Station",
    "Barking Underground Station",
    "Upney Underground Station",
    "Becontree Underground Station",
    "Dagenham Heathway Underground Station",
    "Dagenham East Underground Station",
    "Elm Park Underground Station",
    "Hornchurch Underground Station",
    "Upminster Bridge Underground Station",
    "Upminster Underground Station",
    "Richmond Underground Station",
    "Kew Gardens Underground Station",
    "Gunnersbury Underground Station",
    "Wimbledon Underground Station",
    "Wimbledon Park Underground Station",
    "Southfields Underground Station",
    "East Putney Underground Station",
    "Putney Bridge Underground Station",
    "Parsons Green Underground Station",
    "Fulham Broadway Underground Station",
    "West Brompton Underground Station",
  ],
  hammersmith: [
    "Hammersmith Underground Station",
    "Goldhawk Road Underground Station",
    "Shepherd's Bush Market Underground Station",
    "Wood Lane Underground Station",
    "Latimer Road Underground Station",
    "Ladbroke Grove Underground Station",
    "Westbourne Park Underground Station",
    "Royal Oak Underground Station",
    "Paddington Underground Station",
    "Edgware Road Underground Station",
    "Baker Street Underground Station",
    "Great Portland Street Underground Station",
    "Euston Square Underground Station",
    "King's Cross StPancras Underground Station",
    "Farringdon Underground Station",
    "Barbican Underground Station",
    "Moorgate Underground Station",
    "Liverpool Street Underground Station",
    "Aldgate East Underground Station",
    "Whitechapel  Underground Station",
    "Stepney Green Underground Station",
    "Mile End Underground Station",
    "Bow Road Underground Station",
    "Bromley-by-Bow Underground Station",
    "West Ham Underground Station",
    "Plaistow Underground Station",
    "Upton Park Underground Station",
    "East Ham Underground Station",
    "Barking Underground Station",
  ],
  circle: [
    "Paddington Underground Station",
    "Edgware Road Underground Station",
    "Baker Street Underground Station",
    "Great Portland Street Underground Station",
    "Euston Square Underground Station",
    "King's Cross StPancras Underground Station",
    "Farringdon Underground Station",
    "Barbican Underground Station",
    "Moorgate Underground Station",
    "Liverpool Street Underground Station",
    "Aldgate Underground Station",
    "Tower Hill Underground Station",
    "Monument Underground Station",
    "Cannon Street Underground Station",
    "Mansion House Underground Station",
    "Blackfriars Underground Station",
    "Temple Underground Station",
    "Embankment Underground Station",
    "Westminster Underground Station",
    "St James's Park Underground Station",
    "Victoria Underground Station",
    "Sloane Square Underground Station",
    "South Kensington Underground Station",
    "Gloucester Road Underground Station",
    "High Street Kensington Underground Station",
    "Notting Hill Gate Underground Station",
    "Bayswater Underground Station",
  ],
};
export default stations;
