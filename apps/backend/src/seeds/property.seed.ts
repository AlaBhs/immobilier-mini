import { Property } from "../models/property.model";
import { randomUUID } from "crypto";

export const seedProperties: Property[] = [
  {
    id: randomUUID(),
    title: "Appartement moderne à Paris",
    city: "Paris",
    price: 450000,
    surface: 52,
    createdAt: new Date(),
  },
  {
    id: randomUUID(),
    title: "Maison familiale à Lyon",
    city: "Lyon",
    price: 380000,
    surface: 110,
    createdAt: new Date(),
  },
  {
    id: randomUUID(),
    title: "Studio proche du Vieux-Port",
    city: "Marseille",
    price: 140000,
    surface: 28,
    createdAt: new Date(),
  },
  {
    id: randomUUID(),
    title: "Villa avec vue mer",
    city: "Nice",
    price: 920000,
    surface: 180,
    createdAt: new Date(),
  },
  {
    id: randomUUID(),
    title: "Duplex lumineux",
    city: "Bordeaux",
    price: 310000,
    surface: 78,
    createdAt: new Date(),
  },
  {
    id: randomUUID(),
    title: "Maison avec jardin",
    city: "Toulouse",
    price: 270000,
    surface: 120,
    createdAt: new Date(),
  },
  {
    id: randomUUID(),
    title: "Loft industriel rénové",
    city: "Lille",
    price: 290000,
    surface: 95,
    createdAt: new Date(),
  },
];
