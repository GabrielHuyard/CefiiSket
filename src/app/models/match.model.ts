export class Match {
    id?: string;
    startTime: any;
    endTime: any;
    players: Array<string>;
    location: {
        latitude: number,
        longitude: number
    };
    city: string;
    title: string;
    opponent: string;
}
