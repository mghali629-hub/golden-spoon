import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding The Golden Spoon database...');

  await prisma.menuItem.deleteMany();
  await prisma.reservation.deleteMany();

  await prisma.menuItem.createMany({
    data: [
      {
        name: '48-Hour Glazed Veal Sweetbreads',
        category: 'STARTER',
        price: '£48',
        description: 'Pan-roasted with Périgord black truffle emulsion and caramelized baby shallots.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      },
      {
        name: 'A5 Miyazaki Wagyu Tenderloin',
        category: 'MAIN',
        price: '£165',
        description: 'Wood-fired over binchotan charcoal with bone marrow jus and wild chanterelles.',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
      },
      {
        name: 'Grand Cru Dark Chocolate Sphere',
        category: 'DESSERT',
        price: '£32',
        description: 'Single-origin Valrhona 85% chocolate, hot hazelnut praline pour, gold leaf.',
        image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&q=80',
      },
    ],
  });

  await prisma.reservation.create({
    data: {
      guestName: 'Lord Sterling',
      phone: '+44 20 7946 0912',
      guests: 4,
      date: '2026-08-20',
      time: '20:00',
    },
  });

  console.log('Golden Spoon database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
