// Ejecutar en mongosh: load("cargar_vehiculos.js")

use("automoviles");

db.vehiculos.drop();

db.vehiculos.insertMany([
  // ── Vehículos base ──────────────────────────────────────────────────────────
  { vehiculo: "Automóvil",   categoria: "Terrestre (motorizado)",     peso_toneladas: 1.5,   descripcion: "Vehículo común para transporte personal." },
  { vehiculo: "Motocicleta", categoria: "Terrestre (motorizado)",     peso_toneladas: 0.2,   descripcion: "Vehículo de dos ruedas impulsado por motor." },
  { vehiculo: "Camión",      categoria: "Terrestre (motorizado)",     peso_toneladas: 10,    descripcion: "Vehículo grande para carga pesada." },
  { vehiculo: "Bicicleta",   categoria: "Terrestre (no motorizado)",  peso_toneladas: 0.015, descripcion: "Vehículo de dos ruedas impulsado por pedales." },
  { vehiculo: "Monopatín",   categoria: "Terrestre (no motorizado)",  peso_toneladas: 0.005, descripcion: "Tabla con ruedas impulsada por el usuario." },
  { vehiculo: "Barco",       categoria: "Acuático",                   peso_toneladas: 500,   descripcion: "Embarcación grande usada para transporte marítimo." },
  { vehiculo: "Lancha",      categoria: "Acuático",                   peso_toneladas: 2,     descripcion: "Embarcación pequeña usada en ríos o mares." },
  { vehiculo: "Avión",       categoria: "Aéreo",                      peso_toneladas: 70,    descripcion: "Aeronave comercial para transporte de pasajeros." },
  { vehiculo: "Helicóptero", categoria: "Aéreo",                      peso_toneladas: 3,     descripcion: "Aeronave de despegue vertical con rotores." },
  { vehiculo: "Cohete",      categoria: "Espacial",                   peso_toneladas: 500,   descripcion: "Vehículo propulsado para viajes espaciales." },

  // ── Vehículos para demo de TTL (descripción ≤ 20 chars → se guardan en caché)
  // Bus     → 3 caracteres  → TTL 15 s
  // Camión  ya existe arriba (6 chars, desc larga); se usa Tren para TTL 20 s
  // Tren    → 4 caracteres  → TTL 15 s
  // Tranvía → 7 caracteres  → TTL 20 s
  // Submarino → 9 caracteres → TTL 20 s
  // Portaaviones → 12 caracteres → TTL 40 s
  { vehiculo: "Bus",          categoria: "Terrestre (motorizado)",    peso_toneladas: 8,     descripcion: "Transporte urbano" },
  { vehiculo: "Tren",         categoria: "Terrestre (motorizado)",    peso_toneladas: 450,   descripcion: "Transporte masivo" },
  { vehiculo: "Tranvía",      categoria: "Terrestre (motorizado)",    peso_toneladas: 30,    descripcion: "Riel urbano" },
  { vehiculo: "Portaaviones", categoria: "Acuático",                  peso_toneladas: 65000, descripcion: "Buque de guerra" }
]);

print("✅ vehiculos cargados: " + db.vehiculos.countDocuments());
