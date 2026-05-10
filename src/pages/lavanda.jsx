import { mountPage } from '../components/PageTemplate';
import { FLOWERS } from '../data';

const flower = FLOWERS.find(f => f.id === 'lavender');
mountPage(flower);