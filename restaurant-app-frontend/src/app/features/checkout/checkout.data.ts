import { environment as env } from '../../../environments/environment';

export interface Checkout {
    name: string;
    description: string;
    image?: string;
}

export const checkout: Checkout[] = [
    {
        name: 'Spaghetti',
        image:
            'https://pysznosci.pl/wp-content/uploads/2019/11/spaghetti-bolognese-mini.jpg',
        description: 'Klasyk Oskarka'
    },
    {
        name: 'Carbonara',
        image:
            'https://www.mojegotowanie.pl/uploads/media/recipe/0001/100/carbonara.jpeg',
        description: 'Carbonara że aż palce lizać'
    }
];
