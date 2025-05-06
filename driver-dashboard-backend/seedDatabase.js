const fs = require('fs');
const path = require('path');
const sequelize = require('./config/db');
const {
  LicenseType,
  DriverType,
  Driver,
  KpiHistory,
} = require('./models');

const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'driver_kpi_dataset_v2.json'), 'utf8')
);

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Reset tables

    console.log('🔄 Syncing database...');

    // Step 1: Seed license types
    await LicenseType.bulkCreate([
      { id: 1, name: 'Class A', description: 'Heavy trucks and trailers' },
      { id: 2, name: 'Class B', description: 'Medium trucks and vans' },
      { id: 3, name: 'Class C', description: 'Light vehicles and taxis' },
    ]);

    // Step 2: Seed driver types
    await DriverType.bulkCreate([
      { id: 1, name: 'Own', description: 'Employed by the company' },
      { id: 2, name: 'Leased', description: 'Contracted from external fleets' },
      { id: 3, name: 'Broker', description: 'Independent or third-party drivers' },
    ]);

    console.log('✅ Seeded license_types and driver_types');

    // Step 3: Seed drivers and their KPI history
    for (const item of jsonData) {
      const driver = await Driver.create({
        full_name: item.fullName,
        phone: item.contactInfo.phone,
        email: item.contactInfo.email,
        years_of_experience: item.yearsOfExperience,
        license_type_id: 1, // Can map later from item.license.type
        driver_type_id: 1,  // Can map later from item.type
      });

      for (const entry of item.kpiHistory) {
        await KpiHistory.create({
          driver_id: driver.id,
          date: entry.date,
          trips_completed: entry.tripsCompleted,
          driver_rating: entry.driverRating,
          revenue_collected: entry.revenueCollected,
          orders_completed_count: entry.ordersCompleted.count,
          orders_completed_percentage: entry.ordersCompleted.percentage,
          boxes_delivered: entry.boxesDelivered,
          boxes_rejected: entry.boxesRejected,
          on_time_arrival_percent: entry.onTimeArrivalPercent,
          fuel_consumption: entry.fuelConsumption,
          distance_covered: entry.distanceCovered,
          working_hours: entry.workingHours,
          idle_time: entry.idleTime,
          average_speed: entry.averageSpeed,
          fuel_efficiency: entry.fuelEfficiency,
          stop_frequency: entry.stopFrequency,
          comments: entry.comments || null,
        });
      }
    }

    console.log('✅ All data seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding data:', err);
    process.exit(1);
  }
}

seed();
