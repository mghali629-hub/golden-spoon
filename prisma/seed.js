const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Golden Spoon DB...');

  await prisma.menuItem.deleteMany();
  await prisma.chefProfile.deleteMany();
  await prisma.wineItem.deleteMany();

  const menuItems = [
    { name: 'Truffle-Infused Wagyu A5 Tartare', category: 'Starters', price: '$85.00', description: 'Hand-cut Miyazaki Wagyu beef with shaved black Périgord truffle and quail egg yolk.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    { name: 'Glacier Toothfish with Saffron Reduction', category: 'Mains', price: '$140.00', description: 'Wild-caught Antarctic toothfish pan-seared with saffron-infused emulsion and sea samphire.', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop' },
    { name: 'Gold Leaf Valrhona Chocolate Sphere', category: 'Desserts', price: '$65.00', description: 'Dark chocolate dome with warm smoked hazelnut praline pour-over.', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop' }
  ];

  for (const item of menuItems) {
    await prisma.menuItem.create({ data: item });
  }

  await prisma.chefProfile.createMany({
    data: [
      { name: 'Chef Jean-Luc Moreau', role: 'Executive Chef', bio: 'Trained under French culinary legends, bringing classic precision and modern alchemy to Golden Spoon.', awards: '3 Michelin Stars', photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop' }
    ]
  });

  await prisma.wineItem.createMany({
    data: [
      { name: 'Château Margaux Premier Grand Cru 2015', vintage: '2015', region: 'Bordeaux, France', price: '$2,450' }
    ]
  });

  console.log('Golden Spoon DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
