export type TransportLine = {
    id: number;
    type: 'bus' | 'tram' | 'ferry';
    name: string;
    category: string;
    startTime: string;
    endTime: string;
    route: string[];
  };
  
  export const transportLines: TransportLine[] = [
    { id: 1, type: 'bus', category: 'Dakar Dem Dikk', name: 'Bargny - Thiaroye', startTime: '06:00', endTime: '22:00', route: ['Station A', 'Station B', 'Station C'] },
    { id: 2, type: 'bus', category: 'Tata', name: 'Baux Maraichers - Aéroport', startTime: '06:00', endTime: '22:00', route: ['Station X', 'Station Y', 'Station Z'] },
    { id: 3, type: 'tram', category: 'Tram', name: 'Centre Ville - Gare', startTime: '05:00', endTime: '23:00', route: ['Gare Centrale', 'Place Centrale', 'Rue Principale'] },
    { id: 4, type: 'tram', category: 'Tram', name: 'Parc - Musée', startTime: '05:30', endTime: '22:30', route: ['Parc National', 'Rue des Fleurs', 'Musée'] },
    { id: 5, type: 'ferry', category: 'Ferris', name: 'Île - Port', startTime: '07:00', endTime: '20:00', route: ['Port', 'Île Centrale'] },
    { id: 6, type: 'ferry', category: 'Ferris', name: 'Plage - Port', startTime: '08:00', endTime: '19:00', route: ['Port', 'Plage Sud'] },
  ];
  