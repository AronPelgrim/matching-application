const mongoose = require('mongoose');

// Schema verwijst naar een MongoDB-verzameling
const SchemaNummers = mongoose.Schema;

// Dataschema voor de database
const nummerSchema = new SchemaNummers({
     title: {
          type: String,
          required: true,
     },
     artist: {
          type: String,
          required: true,
     },
     genre: {
          type: String,
          required: true,
     },
});

// Definieer een model met collectie naam en Schema
const Nummers = mongoose.model('nummers', nummerSchema);
module.exports = Nummers;
